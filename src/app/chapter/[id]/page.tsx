"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Icon from "@cloudscape-design/components/icon";
import Link from "@cloudscape-design/components/link";

interface Section {
    title: string;
    content: React.ReactNode;
}

const chapterSections: Section[] = [
    {
        title: "Opening",
        content: (
            <>
                <p>Who are you?... Are you your body? Or your mind? Or are you something higher? Do you know who you are, or do you merely think you know? And does it really matter? Our materialistic society, with its unenlightened leadership, has made it virtually taboo to inquire into our real, higher self. Instead we use our valuable time maintaining, decorating, and pampering the body for its own sake. Might there be an alternative?</p>
            </>
        )
    },
    {
        title: "Purpose of this movement",
        content: (
            <>
                <p>This very important Kṛṣṇa consciousness movement is meant to save human society from spiritual death. At present human society is being misled by leaders who are blind, for they do not know the aim and objective of human life, which is self-realization and the reestablishment of our lost relationship with the Supreme Personality of Godhead. That is the missing point. The Kṛṣṇa consciousness movement is trying to enlighten human society in this important matter.</p>
                <div style={{ marginTop: '16px' }}></div>
                <p>According to Vedic civilization, the perfection of life is to realize one’s relationship with Kṛṣṇa, or God. In the <em>Bhagavad-gītā,</em> which is accepted by all authorities in transcendental science as the basis of all Vedic knowledge, we understand that not only human beings but all living entities are parts and parcels of God. The parts are meant for serving the whole, just as the legs, hands, fingers, and ears are meant for serving the total body. We living entities, being parts and parcels of God, are duty-bound to serve Him.</p>
            </>
        )
    },
    {
        title: "Why serve? And why serve God?",
        content: (
            <>
                <p>Actually our position is that we are always rendering service to someone, either to our family, country, or society. If we have no one to serve, sometimes we keep a pet cat or dog and render service to it. All these factors prove that we are constitutionally meant to render service, yet in spite of serving to the best of our ability, we are not satisfied. Nor is the person to whom we are rendering that service satisfied. On the material platform, everyone is frustrated. The reason for this is that the service being rendered is not properly directed. For example, if we want to render service to a tree, we must water the root. If we pour water on the leaves, branches, and twigs, there is little benefit. If the Supreme Personality of Godhead is served, all other parts and parcels will be automatically satisfied. Consequently all welfare activities as well as service to society, family, and nation are realized by serving the Supreme Personality of Godhead.</p>
                <div style={{ marginTop: '16px' }}></div>
                <p>It is the duty of every human being to understand his constitutional position with God and to act accordingly. If this is possible, then our lives become successful.</p>
            </>
        )
    },
    {
        title: "But I don't believe that God exists…",
        content: (
            <>
                <p>Sometimes, however, we feel challenging and say, “There is no God,” or “I am God,” or even, “I don’t care for God.” But in actuality this challenging spirit will not save us. God is there, and we can see Him at every moment. If we refuse to see God in our life, then He will be present before us as cruel death. If we do not choose to see Him in one feature, we will see Him in another. There are different features of the Supreme Personality of Godhead because He is the original root of the entire cosmic manifestation. In one sense, it is not possible for us to escape Him.</p>
                <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '16px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input type="checkbox" disabled /> Scientists quotes
                    </li>
                </ul>
            </>
        )
    },
    {
        title: "Scientific Approach",
        content: (
            <>
                <p>This Kṛṣṇa consciousness movement is not blind religious fanaticism, nor is it a revolt by some recent upstart; rather, it is an authorized, scientific approach to the matter of our eternal necessity in relation with the Absolute Personality of Godhead, the Supreme Enjoyer. Kṛṣṇa consciousness simply deals with our eternal relationship with Him and the process of discharging our relative duties to Him. Thus, Kṛṣṇa consciousness enables us to achieve the highest perfection of life attainable in the present human form of existence.</p>
            </>
        )
    },
    {
        title: "Why not eat sleep earn and enjoy life?",
        content: (
            <>
                <p>We must always remember that this particular form of human life is attained after an evolution of many millions of years in the cycle of transmigration of the spirit soul. In this particular form of life, the economic question is more easily solved than in the lower, animal forms. There are swine, dogs, camels, asses, and so on, whose economic necessities are just as important as ours, but the economic questions of these animals and others are solved under primitive conditions, whereas the human being is given all the facilities for leading a comfortable life by the laws of nature.</p>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#2C3E50', marginTop: '24px', marginBottom: '12px' }}>Why is a man given a better chance to live than swine or other animals?</h3>
                <p>Why is a highly posted government officer given better facilities for a comfortable life than an ordinary clerk? The answer is very simple: the important officer has to discharge duties of a more responsible nature than those of an ordinary clerk. Similarly, the human being has to discharge higher duties than the animals, who are always busy with filling their hungry stomachs. But by the laws of nature, the modern animalistic standard of civilization has only increased the problems of filling the stomach. When we approach some of these polished animals for spiritual life, they say that they only want to work for the satisfaction of their stomachs and that there is no necessity of inquiring about the Godhead. Yet despite their eagerness to work hard, there is always the question of unemployment and so many other impediments incurred by the laws of nature. Despite this, they still denounce the necessity of acknowledging the Godhead.</p>
                <div style={{ marginTop: '16px' }}></div>
                <p>We are given this human form of life not just to work hard like the swine or dog, but to attain the highest perfection of life.</p>
            </>
        )
    },
    {
        title: "I don't want highest perfection at the cost of my current enjoyment",
        content: (
            <>
                <p>If we do not want that perfection, then we will have to work very hard, for we will be forced to by the laws of nature. In the closing days of Kali-yuga (this present age) men will have to work hard like asses for only a scrap of bread. This process has already begun, and every year the necessity for harder work for lesser wages will increase. Yet human beings are not meant to work hard like animals, and if a man fails to discharge his duties as a human being, he is forced to transmigrate to the lower species of life by the laws of nature. The <em>Bhagavad-gītā</em> very vividly describes how a spirit soul, by the laws of nature, takes his birth and gets a suitable body and sense organs for enjoying matter in the material world.</p>
                <div style={{ marginTop: '16px' }}></div>
                <p>In the <em>Bhagavad-gītā</em> it is also stated that those who attempt but do not complete the path of approaching God—in other words, those who have failed to achieve complete success in Kṛṣṇa consciousness—are given the chance to appear in the families of the spiritually advanced or in financially well-to-do mercantile families. If the unsuccessful spiritual aspirants are offered such chances of noble parentage, what of those who have actually attained the required success? Therefore an attempt to go back to Godhead, even if half finished, guarantees a good birth in the next life. Both the spiritual and the financially well-to-do families are beneficial for spiritual progress because in both families one can get a good chance to make further progress from the point where he stopped in his previous birth.</p>
                <div style={{ marginTop: '16px' }}></div>
                <p>In spiritual realization the atmosphere generated by a good family is favorable for the cultivation of spiritual knowledge.</p>
                <div style={{ marginTop: '16px' }}></div>
                <p>The <em>Bhagavad-gītā</em> reminds such fortunate well-born persons that their good fortune is due to their past devotional activities. Unfortunately, the children of these families do not consult the <em>Bhagavad-gītā,</em> being misguided by <em>māyā</em> (illusion).</p>
                <div style={{ marginTop: '16px' }}></div>
                <p>Birth in a well-to-do family solves the problem of having to find sufficient food from the beginning of life, and later a comparatively easier and more comfortable way of life can be led. Being so situated, one has a good chance to make progress in spiritual realization, but as ill luck would have it, due to the influence of the present iron age (which is full of machines and mechanical people) the sons of the wealthy are misguided for sense enjoyment, and they forget the good chance they have for spiritual enlightenment. Therefore nature, by her laws, is setting fires in these golden homes. It was the golden city of Laṅkā, under the regime of the demoniac Rāvaṇa, that was burned to ashes. That is the law of nature.</p>
            </>
        )
    },
    {
        title: "What's the solution?",
        content: (
            <>
                <p>The <em>Bhagavad-gītā</em> is the preliminary study of the transcendental science of Kṛṣṇa consciousness, and it is the duty of all responsible heads of state to chalk out their economic and other programs by referring to the <em>Bhagavad-gītā.</em> We are not meant to solve economic questions of life by balancing on a tottering platform; rather, we are meant to solve the ultimate problems of life which arise due to the laws of nature. Civilization is static unless there is spiritual movement. The soul moves the body, and the living body moves the world. We are concerned about the body, but we have no knowledge of the spirit that is moving that body. Without the spirit, the body is motionless, or dead.</p>
                <div style={{ marginTop: '16px' }}></div>
                <p>The human body is an excellent vehicle by which we can reach eternal life. It is a rare and very important boat for crossing over the ocean of nescience which is material existence. On this boat there is the service of an expert boatman, the spiritual master. By divine grace, the boat plies the water in a favorable wind. With all these auspicious factors, who would not take the opportunity to cross over the ocean of nescience? If one neglects this good chance, it should be known that he is simply committing suicide.</p>
                <div style={{ marginTop: '16px' }}></div>
                <p>There is certainly a great deal of comfort in the first-class coach of a train, but if the train does not move toward its destination, what is the benefit of an air-conditioned compartment? Contemporary civilization is much too concerned with making the material body comfortable. No one has information of the real destination of life, which is to go back to Godhead. We must not just remain seated in a comfortable compartment; we should see whether or not our vehicle is moving toward its real destination. There is no ultimate benefit in making the material body comfortable at the expense of forgetting the prime necessity of life, which is to regain our lost spiritual identity.</p>
            </>
        )
    },
    {
        title: "What's stopping us?",
        content: (
            <>
                <p>The boat of human life is constructed in such a way that it must move toward a spiritual destination. Unfortunately this body is anchored to mundane consciousness by five strong chains, which are: (1) attachment to the material body due to ignorance of spiritual facts, (2) attachment to kinsmen due to bodily relations, (3) attachment to the land of birth and to material possessions such as house, furniture, estates, property, business papers, etc., (4) attachment to material science, which always remains mysterious for want of spiritual light, and (5) attachment to religious forms and holy rituals without knowing the Personality of Godhead or His devotees, who make them holy. These attachments, which anchor the boat of the human body, are explained in detail in the Fifteenth Chapter of the <em>Bhagavad-gītā.</em> There they are compared to a deeply rooted banyan tree which is ever increasing its hold on the earth. It is very difficult to uproot such a strong banyan tree, but the Lord recommends the following process: "The real form of this tree cannot be perceived in this world. No one can understand where it ends, where it begins, or where its foundation is. But with determination one must cut down this tree with the weapon of detachment. So doing, one must seek that place from which, having once gone, one never returns, and there surrender to that Supreme Personality of Godhead from whom everything has begun and in whom everything is abiding since time immemorial." <Link href="https://prabhupada.io/bg/15/3-4" external>(Bg. 15.3-4)</Link></p>
                <div style={{ marginTop: '16px' }}></div>
                <p>Neither the scientists nor speculative philosophers have yet arrived at any conclusion concerning the cosmic situation. All they have done is posit different theories about it. Some of them say that the material world is real, others say that it is a dream, and yet others say that it is ever existing. In this way different views are held by mundane scholars, but the fact is that no mundane scientist or speculative philosopher has ever discovered the beginning of the cosmos or its limitations. No one can say when it began or how it floats in space. They theoretically propose some laws, like the law of gravitation, but actually they cannot put this law to practical use. For want of actual knowledge of the truth, everyone is anxious to promote his own theory to gain certain fame, but the actual fact is that this material world is full of miseries and that no one can overcome them simply by promoting some theories about the subject.</p>
            </>
        )
    },
    {
        title: "What we need to do",
        content: (
            <>
                <p>The Personality of Godhead, who is fully cognizant of everything in His creation, informs us that it is in our best interest that we desire to get out of this miserable existence. We must detach ourselves from everything material. To make the best use of a bad bargain, our material existence must be one-hundred-percent spiritualized. Iron is not fire, but it can be turned into fire by constant association with fire. Similarly, detachment from material activities can be effected by spiritual activities, not by material inertia. Material inertia is the negative side of material action, but spiritual activity is not only the negation of material action but the activation of our real life. We must be anxious to search out eternal life, or spiritual existence in Brahman, the Absolute. The eternal kingdom of Brahman is described in the <em>Bhagavad-gītā</em> as that eternal country from which no one returns. That is the kingdom of God.</p>
                <div style={{ marginTop: '16px' }}></div>
                <p>The beginning of our present material life cannot be traced, nor is it necessary for us to know how we became conditioned in material existence. We have to be satisfied with the understanding that somehow or other this material life has been going on since time immemorial and now our duty is to surrender unto the Supreme Lord, who is the original cause of all causes.</p>
            </>
        )
    },
    {
        title: "Defining the goal",
        content: (
            <>
                <p>The preliminary qualification for going back to Godhead is given in the <em>Bhagavad-gītā</em> <Link href="https://prabhupada.io/bg/15/5" external>(15.5)</Link>: "One who is free from illusion, false prestige, and false association, who understands the eternal, who is done with material lust and is free from the duality of happiness and distress, and who knows how to surrender unto the Supreme Person attains that eternal kingdom."</p>
                <div style={{ marginTop: '16px' }}></div>
                <p>One who is convinced of his spiritual identity and is freed from the material conception of existence, who is free from illusion and is transcendental to the modes of material nature, who constantly engages in understanding spiritual knowledge and who has completely severed himself from sense enjoyment can go back to Godhead. Such a person is called <em>amūḍha,</em> as distinguished from <em>mūḍha,</em> or the foolish and ignorant, for he is freed from the duality of happiness and distress.</p>
            </>
        )
    },
    {
        title: "What's on the other side",
        content: (
            <>
                <p>And what is the nature of the kingdom of God? It is described in the <em>Bhagavad-gītā</em> <Link href="https://prabhupada.io/bg/15/6" external>(15.6)</Link> as follows: "That abode of Mine is not illumined by the sun or moon, nor by electricity. One who reaches it never returns to this material world."</p>
                <div style={{ marginTop: '16px' }}></div>
                <p>Although every place in the creation is within the kingdom of God because the Lord is the supreme proprietor of all planets, there is still the Lord's personal abode, which is completely different from the universe in which we are now living. And this abode is called <em>paramam,</em> or the supreme abode. Even on this earth there are countries where the standard of living is high and countries where the standard of living is low. Besides this earth, there are innumerable other planets distributed all over the universe, and some are considered superior places and some inferior places. In any case, all planets within the jurisdiction of the external energy, material nature, require the rays of a sun or the light of fire for their existence, because the material universe is a region of darkness. Beyond this region, however, is a spiritual realm, which is described as functioning under the superior nature of God. That realm is described in the <em>Upaniṣads</em> thus: "There is no need of sun, moon, or stars, nor is that abode illumined by electricity or any form of fire. All these material universes are illumined by a reflection of that spiritual light, and because that superior nature is always self-luminous, we can experience a glow of light even in the densest darkness of night." In the <em>Hari-vaṁśa</em> the spiritual nature is explained by the Supreme Lord Himself as follows: "The glaring effulgence of the impersonal Brahman [the impersonal Absolute] illuminates all existences, both material and spiritual. But, O Bhārata, you must understand that this Brahman illumination is the effulgence of My body." In the <em>Brahma-saṁhitā</em> this conclusion is also confirmed. We should not think that we can attain that abode by any material means such as spaceships, but we should know for certain that one who can attain that spiritual abode of Kṛṣṇa can enjoy eternal, spiritual bliss without interruption. As fallible living entities, we have two phases of existence. One is called material existence, which is full of the miseries of birth, death, old age, and disease, and the other is called spiritual existence, in which there is an incessant spiritual life of eternity, bliss, and knowledge. In material existence we are ruled by the material conception of the body and the mind, but in spiritual existence we can always relish the happy, transcendental contact of the Personality of Godhead. In spiritual existence, the Lord is never lost to us.</p>
                <div style={{ marginTop: '16px' }}></div>
                <p>The Kṛṣṇa consciousness movement is trying to bring that spiritual existence to humanity at large. In our present material consciousness, we are attached to the sensual material conception of life, but this conception can be removed at once by devotional service to Kṛṣṇa, or Kṛṣṇa consciousness. If we adopt the principles of devotional service, we can become transcendental to the material conceptions of life and be liberated from the modes of goodness, passion, and ignorance, even in the midst of various material engagements. Everyone who is engaged in material affairs can derive the highest benefit from the pages of <em>Back to Godhead</em> and the other literatures of this Kṛṣṇa consciousness movement. These literatures help all people sever the roots of the indefatigable banyan tree of material existence. These literatures are authorized to train us to renounce everything related to the material conception of life and to relish spiritual nectar in every object. This stage is obtainable only by devotional service and nothing else. By rendering such service, one can at once get liberation (<em>mukti</em>) even during this present life. Most spiritual endeavors are tinged with the colors of materialism, but pure devotional service is transcendental to all material pollution. Those who desire to go back to Godhead need only adopt the principles of this Kṛṣṇa consciousness movement and simply aim their consciousness at the lotus feet of the Supreme Lord, the Personality of Godhead, Kṛṣṇa.</p>
            </>
        )
    }
];

interface ExpandableCardProps {
    title: string;
    content: React.ReactNode;
    isExpanded: boolean;
    onToggle: () => void;
}

function ExpandableCard({ title, content, isExpanded, onToggle }: ExpandableCardProps) {
    return (
        <div
            onClick={onToggle}
            style={{
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                boxShadow: isExpanded
                    ? '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
                    : '0 4px 6px 0 rgba(31, 38, 135, 0.1)',
                marginBottom: '16px',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                position: 'relative'
            }}
        >
            {/* Left Accent Line (Visible when expanded) */}
            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '4px',
                    background: 'linear-gradient(to bottom, #FFD700, #87CEFA)', // Gold to Light Blue
                    opacity: isExpanded ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                }}
            />

            <div style={{ padding: '24px 24px 24px 32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{
                        margin: 0,
                        color: '#2C3E50',
                        fontFamily: "'Outfit', sans-serif", // Assuming Outfit or checking fallback
                        fontSize: '1.25rem',
                        fontWeight: 600
                    }}>
                        {title}
                    </h3>
                    <div style={{
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        color: '#eb9f4a' // Soft saffron
                    }}>
                        <Icon name="angle-down" />
                    </div>
                </div>

                {/* Content Area */}
                <div style={{
                    maxHeight: isExpanded ? '4000px' : '60px', // Increased max-height for large content
                    opacity: isExpanded ? 1 : 0.7,
                    marginTop: '12px',
                    transition: 'all 0.4s ease-in-out',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        margin: 0,
                        color: '#4A5568',
                        lineHeight: '1.7',
                        fontSize: '1rem',
                        fontFamily: "sans-serif"
                    }}>
                        {content}
                    </div>

                    {/* Fade out effect for collapsed state */}
                    {!isExpanded && (
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '40px',
                            background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.8))'
                        }} />
                    )}
                </div>

                {/* "Show Less" Button */}
                {isExpanded && (
                    <div style={{
                        marginTop: '16px',
                        textAlign: 'center',
                        color: '#718096',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        opacity: 0.8
                    }}>
                        Show less
                    </div>
                )}
            </div>
        </div>
    );
}

export default function ChapterDetail() {
    const params = useParams();
    const id = params?.id;
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(to bottom, #E0F7FA, #FFFFFF)', // Pale sky blue -> soft white
            padding: '20px',
            position: 'relative',
            overflowX: 'hidden'
        }}>
            {/* Background Clouds (Simplified CSS representation) */}
            <div style={{
                position: 'fixed',
                top: '10%',
                left: '-10%',
                width: '300px',
                height: '100px',
                background: 'white',
                borderRadius: '50px',
                filter: 'blur(40px)',
                opacity: 0.4,
                zIndex: 0,
                // animation: 'drift 20s infinite linear' // Animation would need global css keyframes
            }} />
            <div style={{
                position: 'fixed',
                top: '40%',
                right: '-5%',
                width: '200px',
                height: '80px',
                background: 'white',
                borderRadius: '50px',
                filter: 'blur(30px)',
                opacity: 0.3,
                zIndex: 0
            }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
                <header style={{ marginBottom: '32px', textAlign: 'center' }}>
                    <div style={{
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        color: '#718096',
                        fontSize: '0.85rem',
                        marginBottom: '8px'
                    }}>
                        Chapter {id}
                    </div>
                    <h1 style={{
                        margin: 0,
                        color: '#1a202c',
                        fontFamily: "serif",
                        fontSize: '2rem',
                        fontWeight: 600
                    }}>
                        Learning the Science of the Soul
                    </h1>
                </header>

                <div>
                    {chapterSections.map((section, index) => (
                        <ExpandableCard
                            key={index}
                            title={section.title}
                            content={section.content}
                            isExpanded={expandedIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

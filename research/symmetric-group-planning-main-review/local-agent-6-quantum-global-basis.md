# Local agent 6 — quantum/global-basis closure audit

Scope: read-only audit, 2026-09-07. “Closed” means an inspected proof route, not a survey assertion.

## Verdict

Current SYMR-10 is insufficient: its quantum “fragment” omits the full Cartan datum, integral/divided-power form and quantum highest-weight theorem; its bar row omits the A-form, opposite lattice, intersection, balanced-triple isomorphism and uniqueness lemma. These foundations can be first-class from Kashiwara’s complete primary proof, corroborated by Jeong–Kang–Kashiwara (JKK).

This does not close Ariki’s geometry. Ariki’s original full text was found/read, but imports affine-Hecke/KL/IC/perverse-sheaf and cyclic-quiver canonical-basis theorems. Treat it as recorded/proof-blocked until those suppliers are built. Likewise LT gives Fock formulas and Fock bar/transition theorems but imports q-wedge construction from Hayashi/Kashiwara–Miwa–Stern; BK 2009 merely restates the action.

## Exact nondegenerate regime

Use v for the quantum/global-basis indeterminate and xi for the Hecke parameter.

- F algebraically closed, char F=0; xi in F^x, xi != 1, e=ord(xi)>=2.
- I=Z/eZ, affine A_(e-1)^(1). For e=2, a_01=a_10=-2, hence the degree-three Serre relation applies; never silently use the simply-laced degree-two relation.
- Ariki 1996 uses q^2 in its quadratic normalization, and assumes ord(q^2)=e. After generator rescaling xi=q^2. Level one has weight Lambda_0.

e=0 is generic context, not a root-of-unity prerequisite. Positive characteristic is excluded: adjustment matrices remain.

## Proposed A page: level-one-fock-space-and-residue-crystals

Replace the compressed quantum/global rows by the following 16 A rows (under 60).

| ID | exact claim/deps | proof joints and primary locator |
|---|---|---|
| def-quantum-affine-type-a-cartan-datum | Define I, P,P^vee, alpha_i,h_i,Lambda_i and affine GCM, including e=2. | K91 §1.1 pp.467–69; JKK Def.1.2 pp.5–6. |
| def-quantum-affine-drinfeld-jimbo-algebra-and-divided-powers | Over Q(v), define E_i,F_i,K_h, every Serre relation, E_i^(r),F_i^(r). Depends on datum/q-integers. | K91 (1.1.14)–(1.1.18); JKK (1.4)–(1.6). |
| def-lusztig-integral-form-and-integrable-highest-weight-module | Define A=Z[v,v^-1], U_A, V_A(Lambda)=U_A^-v_Lambda and quantum universal integrable quotient. | K91 §§1.2,6; JKK Prop.2.2 pp.7–8, §9. |
| def-kashiwara-string-decomposition-and-operators | u=sum F_i^(r)u_r, E_i u_r=0; define tilde e_i,tilde f_i. Depends on divided powers/integrability. | K91 §2.2 pp.472–74; JKK Def.4.3 p.15. |
| def-crystal-lattice-and-crystal-basis | Define A_0, free weight-graded lattice stable under operators, mod-v basis/inverse-arrow axiom. | K91 Def.2.3.1; JKK Defs.4.4,4.6 pp.15–17. |
| thm-crystal-bases-exist-for-integrable-highest-weight-modules | The lattice generated from v_Lambda by tilde f_i is a crystal basis. | K91 Thm.2 p.478, proof §§3–4 pp.479–502; JKK Thm.7.1 p.29. |
| thm-crystal-basis-is-unique-and-identifies-the-highest-component | Connected normal highest-weight crystal of weight Lambda is B(Lambda). | K91 Thm.3; JKK Thm.3.7,7.1. |
| def-level-one-partition-fock-module | Partition basis, charge/residues and exact node exponents. Depends on affine datum and partition/node definitions. | Leclerc–Thibon (LT) §2, (3)–(4), pp.449–50. Translate its left/right convention once. |
| thm-partition-fock-formulas-give-a-quantum-affine-module | Fock sums satisfy all DJ relations, including e=2. | Not authorable yet: LT states it but imports Hayashi/KMS. Retrieve/read a complete action proof and expose its q-wedge straightening/two-node joints. |
| prop-vacuum-submodule-is-the-basic-module | Vacuum has Lambda_k and generates V(Lambda_k); full Fock is generally reducible as U_v(slhat_e). | K91 uniqueness plus LT (1)–(2), pp.447–48. |
| def-fock-crystal-signature-and-kashiwara-operators | Declare one ordered +/- cancellation convention and surviving-node moves. | Needs Misra–Miwa/Fock-action source; do not circularly use SYMR-8. |
| thm-basic-fock-crystal-is-the-restricted-partition-component | Vacuum component is B(Lambda_k), indexed by e-restricted partitions in SYMR convention. | Depends on Fock action/general uniqueness; LT e-regular convention needs conjugation/residue-negation dictionary. |
| def-bar-integral-and-opposite-crystal-lattices | Bar v->v^-1, E,F fixed, K_h->K_-h; define V_A,L_0,L_infty=bar(L_0). | K91 §6 pp.506–09; JKK (9.1)–(9.3). |
| def-balanced-triple-and-globalization-map | E=V_A cap L_0 cap L_infty; balanced iff scalar extensions, equivalently E->L_0/vL_0, are isomorphisms; define inverse G. | JKK Def.8.1, Thm.8.2, Def.8.3 pp.50–51. |
| thm-balanced-triple-for-v-lambda | (V_A(Lambda),L(Lambda),bar L(Lambda)) is balanced. | K91 Thms.6–7, proof §§6–7 pp.503–16; JKK Thm.9.1, §10. |
| thm-lower-global-basis-is-the-unique-bar-invariant-crystal-lift | Each b has unique bar-fixed lift in V_A cap L_0 reducing mod vL_0; these are bases of all lattices/module. | JKK Thms.9.2–9.3 pp.52–53. |

Replace, rather than duplicate, current def-bar-involution-and-global-basis-normalization-on-the-basic-module and thm-global-bases-exist-and-lift-the-restricted-partition-crystal with the last four rows. Current prop-empty must depend on quantum highest-weight theory, not a classical RL integrability item.

## Proposed B page

Keep level-one-fock-space-and-residue-crystals-examples as a four-row leaf:

| ID | content | deps |
|---|---|---|
| ex-e-two-serre-relation-check-on-small-partitions | One nonzero degree-three Serre calculation. | Fock-action theorem |
| ex-charge-zero-e-three-fock-action-on-two-one | Every exponent in E_i M_(2,1), F_i M_(2,1). | Fock definition |
| ex-signature-conjugation-dictionary-between-e-restricted-and-e-regular-labels | Conjugation, residue negation, matching good/cogood move. | signature definition |
| ex-global-lift-from-a-balanced-triple-in-low-weight | Check lattices, bar/reduction for one basic-crystal element. | global-lift theorem |

## Ariki page

Keep ariki-categorification-and-graded-decomposition-numbers separate (also under 60).

| ID | exact claim/deps | status |
|---|---|---|
| def-nondegenerate-root-of-unity-level-one-hecke-regime | Record char 0, xi!=1, order e>=2, Lambda_0, xi=q^2 normalization. | Ariki §1 p.789, §4.6 p.806. |
| def-basic-global-basis-transition-polynomials | Fix lower/upper convention and define d_(lambda,mu)(v) from Fock standard/global expansion on vacuum component. | Depends on global lifts/Fock component. |
| thm-leclerc-thibon-bar-and-unitriangular-fock-ic-bases | Fock bar commutes with f_i; unique bar-fixed G,G^- have congruences and integral unitriangular coefficients. | LT Thms.3.2,3.3,4.1 pp.452–55. Whole-Fock IC basis is not automatically basic-module global basis. |
| thm-ariki-nondegenerate-canonical-projective-theorem-in-characteristic-zero | Nonzero canonical images are dual simple basis; dually projective indecomposables canonical. Level one V(Lambda_0). | Ariki Thm.4.4 p.806. Recorded/proof-blocked on geometry. |
| cor-ungraded-level-one-decomposition-numbers-are-global-transition-coefficients-at-one | Only [S(mu):D(lambda)]=d_(lambda,mu)(1), exact char-0 convention. | Ariki plus Specht/Fock dictionary; BK graded Thms.5.1,5.9. Not graded. |
| thm-graded-characteristic-zero-decomposition-polynomials-equal-global-transition-polynomials | Qualified BK theorem with grading/self-dual normalization. | Depends on recorded Ariki and graded Specht/KLR bridge; cannot prove Ariki. |
| rem-positive-characteristic-adjustment-matrices-remain | Canonical coefficients do not solve general positive-char decomposition numbers. | Existing adjustment rows; BK §5.6. |

Canonical/projective versus dual-canonical/simple requires a stated lower/upper convention and Cartan pairing.

## Proof trace and imported geometry

Required chain:

Cartan datum -> U_v/divided powers -> V(Lambda) -> strings -> Kashiwara operators -> crystal/grand loop -> A-form+bar+L_infty -> balanced triple -> global lifts -> partition Fock action + convention dictionary -> transitions -> Ariki Hecke/IC comparison -> projectives/simples -> v=1 numbers.

K91 closes the first nine arrows. LT closes Fock bar/triangularity after importing action. Ariki imports:

1. Kazhdan–Lusztig, Proof of the Deligne–Langlands conjecture, Thm.6.2 (Ariki §3.2 p.794), affine-Hecke geometric induction.
2. Chriss–Ginzburg K-theory/convolution, Riemann–Roch and decomposition, notably Thms.5.11.14–15, 6.2.4, 8.4.5, 8.6.15 (Ariki §§3.4–3.9 pp.796–800), producing IC-labelled simples/multiplicities.
3. Lusztig, Quivers, perverse sheaves and quantized enveloping algebras, Thm.10.7, Prop.10.13, Cor.13.6, Prop.15.5 (Ariki §4.3 pp.801–03), identifying cyclic-quiver IC objects/canonical basis.
4. Grojnowski–Lusztig comparison of Kashiwara global and Lusztig canonical bases, cited by Ariki §4.7 p.807.

So geometry/KL is imported, not proved. Build/read proof-bearing suppliers or use a genuinely finite-e nondegenerate alternative. BK’s category-O proof is degenerate; its nondegenerate equivalence is generic I=Z, not finite root-of-unity I=Z/eZ.

## Full-text evidence

| key | complete text/use | URL; SHA-256; pages |
|---|---|---|
| K91 | Primary complete/read: DJ presentation, crystal definitions, grand loop, bar/integral lattices, global proof; terminal refs. | https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf ; 39b89708ecbff58c7262cb5aede2857aca82b24303ed32788b3263fdd6be63a5; 52 PDF pp. (journal 465–516). |
| JKK | Primary-author complete cache/read; crystal/balanced/global route; terminal refs/author data. | https://arxiv.org/pdf/math/0305390 ; f873e27305536ded497ec03bf1dec3770354f56e8e00e9b7aafe384cf140b7f6; 60 pp. |
| LT | Complete primary-author arXiv version/read: Fock formulas, bar, IC/global-component transition; explicitly imports q-wedge action. | https://arxiv.org/pdf/q-alg/9602025 ; 289637f0f37050c7c430a7ef336db0431add0a50b2bb4c2a40a6d0564e7c2008; 10 pp. |
| KMPY | Complete primary q-wedge Fock construction located; possible action proof route, local joints not yet decomposed. | https://arxiv.org/pdf/q-alg/9603025 ; 99bb8974806e51befd59b396675cf8eff16ea647696baeb4e345127037e6ee6a; published pp.415–499 (85 pp.). |
| Ariki | Original full text browser-validated/read, exact regime/Thm.4.4. Existing local ariki text is Incapsula error. Browser endpoint is complete but direct stream returns 403; no honest hash. | https://scispace.com/pdf/on-the-decomposition-numbers-of-the-hecke-algebra-of-g-m-1-n-440do7n73s.pdf ; unavailable (403); 20 pp., JMKU 36 (1996), 789–808. |
| BK-deg | Complete cached primary/read boundary check: direct category-O route degenerate only. | https://arxiv.org/pdf/0901.0057 ; 31f6e1bc33cd9d42039dd5a063d2190d1363fabfa02c66d77a56ad813753d325; 44 pp. |
| BK-graded | Existing complete/read cache, exact regime boundary/graded refinement, not proof of Kashiwara/Ariki geometry. | https://arxiv.org/pdf/0901.4450 ; 62e4dddfab3caf89b824cc9b3551ca8a287dc3cac266c443f64ab3eef3fa1266; 57 pp. |

Misra–Miwa, Crystal base for the basic representation of U_q(slhat_n), CMP 134 (1990), 79–88, and Hayashi, CMP 127 (1990), 129–144, are correct primary Fock sources, but no complete inspectable copy was recovered. They remain content blockers if the Fock-action theorem is to be proved rather than inherited.


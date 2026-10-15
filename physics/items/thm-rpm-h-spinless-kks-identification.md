---
id: thm-rpm-h-spinless-kks-identification
kind: theorem
title: "Massive spinless shell reduction is a single KKS orbit"
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: physics
physical_scope: null
dependency_level: 7
deps: ["thm-rpm-h-poincare-moment-map-and-algebra", "thm-rpm-h-flat-shell-global-reduction", "thm-coadjoint-orbits-are-symplectic-manifolds", "def-countable-choice", "def-rpm-h-poincare-charge-space"]
dependency_roles: {"thm-rpm-h-poincare-moment-map-and-algebra": "mathematical-premise", "thm-rpm-h-flat-shell-global-reduction": "mathematical-premise", "thm-coadjoint-orbits-are-symplectic-manifolds": "mathematical-premise", "def-countable-choice": "mathematical-premise", "def-rpm-h-poincare-charge-space": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Nesta van der Schaaf, Classical and Quantum Particles in Galilean and Poincaré Spacetime, complete 2017 monograph PDF; §9.3 PDF pp. 77–79; §10.2.2 PDF pp. 81–82."
      url: https://www.math.ru.nl/~landsman/Nesta.pdf
      locator: "Complete 85-page monograph; full relevant sections inspected. Source uses natural units and signature (+---), translated explicitly in local statements."
    - title: "Jerrold E. Marsden and Tudor S. Ratiu, Introduction to Mechanics and Symmetry, 2nd ed., complete book PDF; §12.1 Theorem 12.1.4 pp. 393–395; §12.4 Theorem 12.4.1 pp. 412–413; §§14.2–14.3 pp. 466–473; §7.9 pp. 208–211."
      url: https://fisica.net/mecanicaclassica/introduction_to_mechanics_and_symmetry_by_jerrold_marsden.pdf
      locator: "Complete 549-page book; full relevant sections inspected."
landmark: false
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume $\mathrm{AC}_\omega$. Fix mass $m>0$ in kg and $c>0$ in m/s. For a charge point $(P^a,J^{ab})$, lower indices by $P_b:=\eta_{ba}P^a$ and $J_{cd}:=\eta_{ce}\eta_{df}J^{ef}$, and define $P^2:=\eta_{ab}P^aP^b$. Let $\varepsilon_{abcd}$ be the totally antisymmetric Minkowski volume tensor with $\varepsilon_{0123}=+1$; raising all indices with $\eta=\operatorname{diag}(-1,1,1,1)$ gives $\varepsilon^{0123}=-1$. Let $\Sigma_m^+$ be the future mass shell in flat Minkowski cotangent space and quotient its complete characteristic lines as in the current draft H8 supplier. The resulting global phase space has coordinates $(a^i,p_i)\in\mathbb R^6$ and form $da^i\wedge dp_i$. Under the charge map of [[thm-rpm-h-poincare-moment-map-and-algebra]], it is globally symplectomorphic to the single coadjoint orbit through $(P=(mc,0),J=0)$. Its image is exactly the future massive charge pairs with $P^2=-m^2c^2$ and $W=0$, where $W^a=\tfrac12\varepsilon^{abcd}P_bJ_{cd}$. This statement identifies one smooth orbit; it makes no regularity claim about a union of Casimir level sets.

## Facts & Assumptions

**Given:** $m>0$, signature $(-,+,+,+)$, the totally antisymmetric volume tensor with $\varepsilon_{0123}=+1$ and $\varepsilon^{0123}=-1$, and the exact global shell quotient.

[A1] [[def-countable-choice]]: assume countable choice $\mathrm{AC}_\omega$ only; no full axiom of choice is used.

[F1] [[def-rpm-h-poincare-charge-space]]: $P^a=\eta^{ab}p_b$, $J^{ab}=x^aP^b-x^bP^a$, and the affine cotangent charge pairing is fixed by $\exp(-s\xi)$; on charge space use $P_b=\eta_{ba}P^a$ and $J_{cd}=\eta_{ce}\eta_{df}J^{ef}$.

[L1] [[thm-rpm-h-poincare-moment-map-and-algebra]]: the current assigned A draft defines the same coadjoint charge map and action used here. The carrier exists as a batch-26 draft; its own H0/H8 prerequisites and proof status remain unresolved.

[L2] [[thm-rpm-h-flat-shell-global-reduction]]: the current H8 draft gives the complete future-shell quotient by characteristic lines, global $(a,p)$ coordinates, reduced form $da^i\wedge dp_i$, and fixed-time slices; its dependencies match the H25 manifest. The H25 Step 1 record is ready/hash-current, but the carrier remains a draft without pipeline_run binding or independent proof approval.

[F2] [[thm-coadjoint-orbits-are-symplectic-manifolds]]: a coadjoint orbit has canonical homogeneous-space smooth structure and KKS form $\omega_\beta(\xi_\mathcal O,\eta_\mathcal O)=\beta([\xi,\eta])$, with moment equation $d\mu^\xi=-\iota_{\xi_\mathcal O}\omega$.

## Proof

**Proof technique:** explicit global charge coordinates and KKS uniqueness.

**Given:** The positive mass shell, actual H8 and H10 draft interfaces [L1]–[L2], and the inspected KKS theorem [F2].

1.1 In a rest frame $P=(mc,0)$, $W=0$ is equivalent to $J^{ij}=0$, since its three spatial components are an invertible multiple of the three spatial angular-momentum components. The remaining $J^{0i}$ are produced explicitly by $x^0=0$, $x^i=-J^{0i}/(mc)$, since $J=x\wedge P$ then has exactly those components and $J^{ij}=0$. Lorentz transforming this representative gives a position representative for every future timelike $P$ with $W=0$. Equivalently for a transverse representative $x\cdot P=0$, $x^a=J^{ab}P_b/P^2$, as substitution of $J=x\wedge P$ gives $J^{ab}P_b=x^aP^2-(x\cdot P)P^a$. This characterization is Lorentz covariant. [F1, L1, algebra]

2.1 H8's quotient point $(a,p)$ maps to $P^0=E/c$, $P^i=p_i$, $J^{0i}=-a^iP^0$, and $J^{ij}=a^ip_j-a^jp_i$. The inverse is $p_i=P^i$, $a^i=-J^{0i}/P^0$, smooth since $P^0>0$. These mutually inverse smooth coordinates make the image an embedded six-dimensional graph and show the quotient map is a diffeomorphism onto the charge locus of step 1.1. [L1, L2, step 1.1, algebra]

3.1 A proper orthochronous boost sends each future massive $P$ to rest. By step 1.1 its $W=0$ charge then has only $J^{0i}$ components, and a translation removes those components. Thus every pair in the locus is in the orbit of $(mc,0;0)$; conversely $P^2$ and $W=0$ are invariant under the coadjoint action. The stabilizer at rest consists of spatial rotations and translations parallel to $P$, dimension $3+1=4$, so the orbit dimension is $10-4=6$. The six smooth orbit coordinates $p_i=P^i$, $a^i=-J^{0i}/P^0$ from step 2.1 have injective differential: if their differentials vanish, the graph formulas in step 2.1 make every component of $(P,J)$ have zero differential, and the coadjoint-orbit inclusion is an immersion. Since both manifolds have dimension six, the inverse function theorem makes this coordinate map a local diffeomorphism. The bijection in step 2.1 is therefore a global diffeomorphism for the canonical orbit smooth structure. [F1, L1, step 1.1, step 2.1, algebra]

4.1 Let $\rho:\Sigma_m^+\to B_m$ be the H8 quotient and $\iota:\Sigma_m^+\hookrightarrow T^*\mathbb R^4$ the inclusion. H8 states $\rho^*\omega_{\rm red}=\iota^*\omega$. The cotangent action of $g=(a,\Lambda)$ preserves this future shell: $P'=\Lambda P$ preserves its norm and future cone, and it maps the full characteristic line $(x+\alpha P,p)$ to $(\Lambda x+a+\alpha\Lambda P,\Lambda^{-T}p)$, which is exactly a characteristic line with momentum $P'$. The inverse group element gives the converse. Therefore the quotient action is well-defined. It is smooth because the global section $\sigma(a^i,p_i)$ given by $x^0=0$, $x^i=a^i$ is smooth and $g\cdot b=\rho(g\cdot\sigma(b))$ is its explicit expression; fibre preservation gives the group law independently of the chosen section. The cotangent action is symplectic by [L1], so pulling back along the surjective submersion $\rho$ gives $\rho^*(g^*\omega_{\rm red})=g^*\iota^*\omega=\iota^*\omega=\rho^*\omega_{\rm red}$, hence the quotient action preserves $\omega_{\rm red}$. Differentiating $\rho(\exp(-s\xi)\cdot z)=\exp(-s\xi)\cdot\rho(z)$ at $s=0$ gives $d\rho(\xi_{\Sigma_m^+})=\xi_{B_m}$ with the library's same fundamental-field convention. The moment components from [L1] are constant on each characteristic fibre since $P$ is fixed and $(x+\alpha P)\wedge P=x\wedge P$. Thus for any tangent $v$ on $B_m$ choose a lift $\tilde v$ and obtain $d\bar\mu^\xi(v)=d\mu^\xi(\tilde v)=-\omega_{\rm red}(\xi_{B_m},v)$. On the orbit [F2] gives the same moment equation. Its fundamental fields span each tangent space, so these equations determine both two-forms pointwise and show the diffeomorphism in step 3.1 pulls KKS back to $\omega_{\rm red}=da^i\wedge dp_i$. [F2, L1, L2, A1, step 3.1] ∎

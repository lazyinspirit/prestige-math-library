---
id: lem-gts-ordinary-slope-semistable-restriction-to-high-degree-surfaces
kind: lemma
title: Ordinary slope semistable restriction to sufficiently high general surfaces
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
axiom_use: "ZF + full Axiom of Choice, inherited from the explicit geometric and coherent suppliers."
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - lem-gts-homogeneous-representations-preserve-slope-semistability
  - thm-hilbert-scheme-represents-projective-flat-families
  - lem-proper-flat-fp-cohomology-perfect-complex
  - thm-serre-vanishing
  - lem-eventual-global-generation-coherent-twists
  - thm-auslander-buchsbaum-serre-regularity-criterion
  - thm-auslander-buchsbaum-formula
  - thm-riemann-roch-for-smooth-projective-surfaces
  - thm-bertini-smooth-hyperplane-section
  - thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
  - def-proper-morphism
  - thm-coherent-sheaves-abelian-noetherian-scheme
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-gts-homogeneous-representations-preserve-slope-semistability: mathematical-premise
  thm-hilbert-scheme-represents-projective-flat-families: mathematical-premise
  lem-proper-flat-fp-cohomology-perfect-complex: mathematical-premise
  thm-serre-vanishing: mathematical-premise
  lem-eventual-global-generation-coherent-twists: mathematical-premise
  thm-auslander-buchsbaum-serre-regularity-criterion: mathematical-premise
  thm-auslander-buchsbaum-formula: mathematical-premise
  thm-riemann-roch-for-smooth-projective-surfaces: mathematical-premise
  thm-bertini-smooth-hyperplane-section: mathematical-premise
  thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms: mathematical-premise
  def-proper-morphism: mathematical-premise
  thm-coherent-sheaves-abelian-noetherian-scheme: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Hubert Flenner, Restrictions of semistable bundles on projective varieties, Commentarii Mathematici Helvetici 59 (1984), 635–650"
      url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN358147735_0059/LOG_0038.pdf
      locator: "Complete sixteen-page article, printed pp. 635–650, actually read as page images. Sections 1.4–1.11 and 2.1–2.7 reconstructed below for dimension three and one hypersurface, with ordinary family and finite-pullback proofs supplied locally. No cited restriction theorem is a premise."
dependency_level: 1
---

## Statement

Assume AC. Let X be a smooth integral complex projective threefold, H an ample Cartier divisor, and E a torsion-free μ_H-semistable sheaf of positive rank r, where μ_H(E)=H²c1(E)/r. For all sufficiently large divisible m, a nonempty Zariski-open subset of |mH| consists of smooth surfaces S for which E|S is torsion-free and μ_(H|S)-semistable. The open subset may also avoid the finite singular locus of E double-dual. No claim about small powers or a bound independent of the rank is made.

More explicitly choose $a>0$ with $A=aH$ very ample, put $D=A^{3}$, and let d be a positive integer with

binom(d+3,3)−d−1 > dD max((r²−1)/4,1).

Then the conclusion holds for a general S∈|dA|. The existence version only needs the right side to be a sufficiently large multiple of d; the explicit inequality is retained to expose every estimate.

## Facts & Assumptions

**Given:** Exactly the smooth complex projective threefold, ample Cartier polarization and torsion-free slope-semistable sheaf in the Statement. Assume AC. All slopes and degrees below are ordinary sheaf slopes, with the specified polarization. Geometric generic parameter fields are characteristic-zero extensions of C.

[F1] [[lem-gts-homogeneous-representations-preserve-slope-semistability]] supplies ordinary tensor, dual and exterior-power semistability for bundles in every dimension. Its stated base field is C; step 35.1 proves the needed tensor/Hom consequence over geometric generic parameter fields by spreading and the surface-family openness proved in step 10.1. No restriction or Bogomolov theorem occurs in that proof.

[F2] [[thm-hilbert-scheme-represents-projective-flat-families]] supplies the proper finitely presented Hilbert scheme for every fixed Hilbert polynomial of a projective family, with its universal flat family on all test schemes; in particular it supplies the point Hilbert schemes. [[lem-proper-flat-fp-cohomology-perfect-complex]] supplies the finite cohomology complexes, universally compatible with base change, for proper finitely presented flat coherent families. The local bounded-quotient/extension construction below reduces its uses to these exact interfaces. The closed-image meaning of properness is [[def-proper-morphism]], and [[thm-coherent-sheaves-abelian-noetherian-scheme]] supplies coherent kernels, images and quotients on the Noetherian universal families.

[F3] [[thm-serre-vanishing]] supplies projective cohomology vanishing. [[lem-eventual-global-generation-coherent-twists]] supplies generation of every sufficiently positive coherent twist. [[thm-auslander-buchsbaum-serre-regularity-criterion]] and [[thm-auslander-buchsbaum-formula]] supply precisely the finite regular-local resolutions and depth computations used in the torsion and reflexive arguments. The line-bundle formula [[thm-riemann-roch-for-smooth-projective-surfaces]] gives the surface Hilbert coefficients used below; their extension to torsion-free sheaves is explicitly derived using a rank-one quotient.

[F4] [[thm-bertini-smooth-hyperplane-section]] applies to every finite-dimensional basepoint-free system on a smooth characteristic-zero variety, including the finite-projection subsystem. [[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]] and the explicit primitive-star identity below give the ordinary divisor Hodge-index form. Neither is a sheaf discriminant estimate.

[F5] [[def-axiom-of-choice]] is the ambient choice convention. Ordinary finite Galois descent, DVR basis reduction, coherent exact sequences, and finite complexes are used explicitly below.

## Proof

**Proof technique:** homogeneous evaluation-kernel calculation, finite Koszul complexes and incidence descent.

1.1 HN existence does not need a discriminant inequality. A torsion-free sheaf embeds in O(b)^M after passing to its reflexive hull and dualizing a globally generated twist of its dual. Thus every rank-p subsheaf determinant has degree bounded above by pb·deg O(1). Degrees are integral and ranks bounded, so a maximal slope exists; choose maximal rank among subsheaves with that slope and saturate. The sum/intersection exact sequences show this subsheaf contains every other maximal-slope subsheaf. Its quotient is torsion-free and has smaller maximal slope. Induction gives the unique HN filtration. Hom between semistable sheaves of larger-to-smaller slope is zero, by applying semistability to its torsion-free image. The same arguments work on a normal projective variety, using reflexive determinants and codimension-one degrees. [given, F1, F2, F3, F4, F5, algebra]

2.1 Finite separable pullback preserves slope semistability for normal projective varieties in characteristic zero, with pullback polarization. Here is the proof used below. Pass to a finite normalization in a Galois closure. If the pullback were unstable, its unique maximal HN subsheaf would be Galois-invariant. Its generic subspace descends to a subspace over the original function field by ordinary finite Galois descent, and let F be the saturated corresponding subsheaf downstairs. At a codimension-one DVR where the original sheaf is free, the saturated generic subspace is the intersection with the free lattice. After any finite DVR extension this intersection commutes with pullback: put the downstairs saturated inclusion in a basis, so its quotient is free, and tensor. Hence the invariant upstairs subsheaf agrees with the pullback of F at every codimension-one point, including ramification divisors. Its determinant degree is therefore degree(cover) times deg F. Its destabilizing slope contradicts downstairs semistability. A destabilizing subsheaf after a nongalois cover stays destabilizing on the Galois closure, by determinant-degree scaling, so this proves the assertion generally. Applying it to each HN factor shows μ_min(f*B/torsion)=deg(f)μ_min(B). [given, F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 We also need relative HN spreading and ordinary semistability openness on a smooth projective SURFACE family, with no restriction theorem as an input. The following elementary bounded-quotient construction supplies them. [given, F1, F2, F3, F4, F5, step 2.1, algebra]

4.1 For a fixed coherent family B on P², flat over a finite-type base, twist it uniformly until it is generated by a fixed number of sections. Every torsion-free quotient Q then has Q(t) globally generated for the same t. Suppose its rank and degree have upper bounds; after this fixed twist write rank u and c1=b, so 0≤b≤B0. Choose u−1 general sections of Q(t). Their rank-drop locus has codimension at least two. The cokernel C is rank one and torsion-free: off finitely many points this follows from the rank condition, and at a closed point the depth lemma gives depth C≥1 from depth Q(t)≥1 and the free kernel. Thus [given, F1, F2, F3, F4, F5, step 3.1, algebra]

5.1 $0→O^{u−1}→Q(t)→I_Z(b)→0$. [given, F1, F2, F3, F4, F5, step 4.1, algebra]

6.1 For $u=1$ use $Q(t)=I_Z(b)$ directly. The quotient $I_Z(b)$ is globally generated. Two general sections have no common curve, so Bezout gives length $Z≤b^{2}$; if $b=0$ this forces Z empty. There are finitely many possibilities for u,b,length Z, and the corresponding Hilbert schemes of points are projective finite type. The extension classes in the displayed sequence form finite-dimensional algebraic families: on each finite affine chart of the Hilbert scheme, resolve its flat universal ideal by a finite relative locally free complex, compute the finite Čech complex of Hom to O, and stratify by the finitely many matrix ranks. The degree-one cocycles then give a finite-type family of extensions which contains every displayed sequence. This is an explicit bounded family of Q, rather than an appeal to a boundedness theorem for semistable sheaves. [given, F1, F2, F3, F4, F5, step 5.1, algebra]

7.1 One can also see a uniform regularity bound directly. If Z has length l and lies in an affine plane chart, the degree $≤l−1$ polynomials span its coordinate algebra: the filtration by degree increases strictly until stable under both coordinate multiplications, at which point it is the whole algebra. Thus $H^{1}(I_Z(k))=0$ for $k≥l−1; H^{2}(I_Z(k))=H^{2}(O(k))=0$ for $k≥−2$. The displayed extension makes every Q(t) uniformly regular, and fixes one of finitely many Hilbert polynomials. This justifies the finite relative complexes and families used above by the ordinary projective Čech/regularity construction, without a numerical bound involving c2. [given, F1, F2, F3, F4, F5, step 6.1, algebra]

8.1 For a smooth surface family obtained as divisors in the present threefold, choose three sections of A whose common zero set in X is finite, and shrink the surface parameter base to avoid it. They give a finite map $S→P^{2}$ on every fibre: its polarization is A|S, so a positive-dimensional fibre would contain a curve of A-degree zero. The family map is finite flat after shrinking, by the local regular parameters and the Cohen–Macaulay depth criterion over $P^{2}$ times the smooth parameter base. Its pushforward takes torsion-free fibre sheaves to torsion-free sheaves on $P^{2}$ and takes quotients to quotients. Ranks and degrees transform by fixed affine formulas: compare the quadratic and linear Hilbert coefficients in $χ(S,Q(kA))=χ(P^{2},f*Q(k))$; equivalently $\operatorname{deg}(f*Q)=\operatorname{deg}_A Q−\operatorname{rank}(Q)(K_S·A+3A^{2})/2$. Therefore rank/degree-bounded torsion-free quotients in the surface family form a bounded finite-type family by the preceding $P^{2}$ construction. This applies to coherent flat families as well as vector bundles. The coefficient formula uses only the line-bundle surface Riemann–Roch supplier: twist a torsion-free rank-q sheaf until generated, choose q−1 general sections, and write its rank-one torsion-free quotient as $I_Z⊗L$. Additivity of χ and the line-bundle formula give the stated quadratic/linear coefficients; Z is zero-dimensional and changes only the constant coefficient. Thus a general coherent-sheaf RR theorem is not an additional premise. [given, F1, F2, F3, F4, F5, step 7.1, algebra]

9.1 Maps from the fixed sheaf to that bounded family are parameterized by a finite-type family: finite relative resolutions and the Čech Hom complex give finitely many matrix equations for its zero-cocycles after a finite rank stratification. Surjectivity is open, since its cokernel has proper support; fibre torsion-freeness is constructible. Explicitly a sheaf on a regular surface is torsion-free exactly when Ext²(Q,ω)=0 and the support of Ext¹(Q,ω) has dimension at most zero: over a dimension-two regular local ring, a minimal free resolution has length at most two, and its last nonzero dual cokernel cannot vanish by Nakayama; the Auslander–Buchsbaum formula therefore identifies Ext²=0 with depth at least one. Localization at codimension-one DVRs detects divisorial torsion by Ext¹. A finite relative locally free resolution computes these Ext sheaves. Finite generic-flatness stratification of its terms, boundaries and cohomologies makes formation of those cohomologies compatible with fibre restriction. On each stratum the vanishing and fibre-support dimension conditions are open, since the support is proper. Thus the condition is constructible on the original finite-type parameter family. Thus the image in the base of quotients with prescribed rank and slope below a specified bound is constructible. Only finitely many Hilbert polynomials occur by the bounds above. If none exists on the geometric generic fibre, this constructible image misses a nonempty open neighbourhood of the generic point. This proves generic semistability after shrinking an irreducible base, rather than openness at every semistable point. More generally take the geometric generic HN filtration; its canonical uniqueness descends it over the function field. Spread its finitely many coherent subsheaves and make the quotients flat and torsion-free after shrinking. Apply the same openness argument to their generically semistable HN factors. It becomes the actual HN filtration of every fibre on a nonempty open. This proves precisely the relative-HN spreading used in the incidence argument below. [given, F1, F2, F3, F4, F5, step 8.1, algebra]

10.1 We now prove genuine openness on ANY smooth integral projective surface family with a coherent flat family B of torsion-free sheaves, using precisely the projective Hilbert interface in F2. Work locally on an affine finite-type parameter base T. For the boundedness of step 8.1 near ANY chosen parameter t, first choose its three sections so that their common zero set misses $S_t$: three general hyperplanes have empty common intersection on that two-dimensional fiber. Shrink only by the proper image of their common-zero locus, so the resulting neighborhood retains t. Thus the finite-polynomial bound applies near every parameter, not just on one generic open. For a fixed quotient Hilbert polynomial P, choose a relative ample line L and a presentation $E1\to E0\to B\to 0$ on the surface family, with E0 a finite sum of negative powers of L, using F3. The square-zero algebra O plus E0 defines a finite projective T-scheme Z, flat over T. A flat quotient $E0\to Q$ with polynomial P is exactly a flat closed subscheme of Z containing its zero section, with structure algebra O plus Q and polynomial $P_O+P$. Apply F2 to Z/T. On its proper Hilbert scheme H, the universal ideal $I_W$ is H-flat, as the kernel of the two H-flat structure sheaves. The condition $I_W\to O$ being zero is closed: after a sufficiently high twist, F2's finite cohomology complex and F3's vanishing/generation make the two pushforwards finite locally free and the source generate $I_W$; cut out the zero map between those bundles. To justify the locally free assertion, work on each affine of the Noetherian quasi-compact H: the nonnegative finite projective cohomology model has zero positive cohomology after the high twist, so splitting backwards from its last projective term makes it a projective module in degree zero. Its universal base-change property gives the same zero-locus test on every base change. This constructs a proper scheme Quot(E0,P) on all tests. Next choose E1 to be a sum of sufficiently negative powers $L^{-b}$ surjecting onto $\ker(E0\to B)$, with b also large enough for the UNIVERSAL quotient Q on this proper parameter scheme to have locally free pushforward of Q(b). The zero section of that bundle representing $E1\to Q$ cuts out a closed subscheme Quot(B,P). Thus proper relative Quot has been constructed from Hilbert, not assumed or imported. All kernels and quotients here are coherent by the explicit coherent-category supplier in F2 below. Steps 4.1-8.1 give finitely many possible P for all destabilizing torsion-free quotients of B: their ranks lie between 1 and rank(B)-1 and their slopes are strictly below the fixed slope of B, so the rank/degree bounds there apply. Take the proper images of these finitely many Quot(B,P) over T; they are closed by the definition of properness. Every unstable fiber lies in their union. Conversely any quotient in one of these entire Quot schemes, including a boundary quotient with torsion, has the same positive proper rank and first-Chern degree fixed by P and the surface Hilbert coefficients. Removing its torsion leaves a torsion-free quotient of B of the same rank and no larger degree: at codimension-one DVRs the torsion determinant has nonnegative length, hence its first Chern cycle is effective; zero-dimensional torsion contributes no first Chern class. The Hilbert-coefficient formula of step 8.1 extends to this case by that torsion exact sequence and the curve-cycle leading coefficient. Its slope is still strictly below that of B, so the fiber is unstable. Therefore the union is EXACTLY the unstable locus, which is closed. Its complement is an open neighborhood of every semistable fiber; this is stronger than the generic openness in step 9.1. It uses no semistable-moduli, restriction or Bogomolov theorem. [given, F1, F2, F3, F4, F5, step 9.1, algebra, construct]

11.1 Let $V=H0(P^{3},O(1)), N=\dim \operatorname{Sym}^d V=\operatorname{binom}(d+3,3)$, and [given, F1, F2, F3, F4, F5, step 10.1, algebra]

12.1 $0→F_d→\operatorname{Sym}^d V⊗O→O(d)→0$. [given, F1, F2, F3, F4, F5, step 11.1, algebra]

13.1 Then $F_d$ is semistable of rank N−1 and slope −d/(N−1). This has a direct homogeneous proof. At $x=[1:0:0:0]$, its fibre is the polynomials with zero constant term at x, decomposed under the stabilizer Levi factor as the sum of $x0^{d−j}\operatorname{Sym}^j U, j=1,…,d$. The central weights distinguish the summands, and each $\operatorname{Sym}^j U$ is irreducible: diagonal weights separate monomials and the elementary operators $x_i\partial _{x_j}$ connect them all. The stabilizer's unipotent translations $x0↦x0+l(U)$ connect degree j to j+1, spanning that next symmetric power. Hence every stabilizer-invariant subspace is precisely the polynomials vanishing to order at least q, for some q. By transitivity the same classifies the SL(V)-invariant saturated subsheaves as the jet kernels $J_q$. [given, F1, F2, F3, F4, F5, step 12.1, algebra]

14.1 The successive jet quotient is $\operatorname{Sym}^j Ω^{1}_{P^{3}}(d)$, of rank binom(j+2,2) and slope d−4j/3. These slopes strictly decrease as j increases. Each proper $J_q$ with $q>1$, being the sum of the highest vanishing orders, has strictly smaller slope than $J_1=F_d$. A destabilizing maximal HN subsheaf would be SL(V)-invariant by uniqueness, hence one of these $J_q$, a contradiction. This proves semistability without restriction or Bogomolov. [given, F1, F2, F3, F4, F5, step 13.1, algebra]

15.1 The complementary ordinary homogeneous-representation theorem makes every $Λ^q F_d$ dual semistable, with slope qd/(N−1). Therefore [given, F1, F2, F3, F4, F5, step 14.1, algebra]

16.1 $H0(P^{3},Λ^q F_d^{\vee}(s))=0$ whenever $s<−qd/(N−1)$. [given, F1, F2, F3, F4, F5, step 15.1, algebra]

17.1 This is the only tensor/exterior-power result consumed from that theorem. [given, F1, F2, F3, F4, F5, step 16.1, algebra]

18.1 For ANY smooth degree-d hypersurface Y⊂P³, we claim [given, F1, F2, F3, F4, F5, step 17.1, algebra]

19.1 $H0(Y,Λ^p(F_d^{\vee}|Y)(s))=0$ if $s<−(p+1)d/(N−1)$. [given, F1, F2, F3, F4, F5, step 18.1, algebra]

20.1 The dual evaluation injection $O(−d)→O^N$, equivalently a nowhere-vanishing section φ of $O^N(d)$, gives the exact wedge-Koszul complex $L^i=Λ^i O^N(id)$, with differential wedge φ. Its kernel at $L^i$ is $Λ^{i−1}F_d^{\mathrm{dual}}((i−1)d)$. For this calculation, use the truncated tail $L^{p+1}→L^{p+2}→⋯→L^N$, omitting the incoming arrow from $L^p$ and placing $L^i$ in cohomological degree i. Exactness of the full Koszul complex shows that this tail has sole cohomology $\ker(L^{p+1}→L^{p+2})=Λ^p F_d^{\mathrm{dual}}(pd)$ in degree p+1. Tensor this tail with the two-term hypersurface resolution $K^{−1}=O(−d)→K^0=O$ and twist by O(−pd+s); its sole cohomology is $Λ^p(F_d^{\mathrm{dual}}|Y)(s)$ in degree p+1. Use the standard affine Čech complex on $P^{3}$ to compute derived global sections of this bounded total complex. [given, F1, F2, F3, F4, F5, step 19.1, algebra]

21.1 For every integer k, the standard four-chart Čech calculation gives $H^1(P^{3},O(k))=H^2(P^{3},O(k))=0$ and $H^q(P^{3},O(k))=0$ for $q>3$. In the Čech hypercohomology of the tail/K total complex, a term with indices i,j,q has total degree i+j+q, where $i≥p+1, j∈{−1,0}$, and $0≤q≤3$. Thus $q=3$ terms have degree at least p+3 and cannot affect degree p+1; the $q=1,2$ rows vanish. The total hypercohomology in degree p+1 is therefore computed by the $H^0$ double complex $C^{i,j}=H^0(P^{3},L^i⊗K^j(−pd+s))$. Every term with $i+j≤p$ vanishes because its line degree (i+j−p)d+s is negative. Since the sheaf total complex has only the target cohomology in degree p+1, its degree-p+1 hypercohomology is exactly $H^0(Y,Λ^p(F_d^{\mathrm{dual}}|Y)(s))$. [given, F1, F2, F3, F4, F5, step 20.1, algebra]

22.1 In the other spectral sequence, the only entries that can contribute in total degree p+1 have $i+j=p+1$. Then $i−1=p−j$ is p or p+1, and their Koszul cohomology embeds into $H^0(P^{3},Λ^{i−1}F_d^{\mathrm{dual}}(s))$, because all preceding C terms vanish. Section 2 shows both groups are zero when $s<−(p+1)d/(N−1)$. Hence the total hypercohomology in degree p+1 vanishes, and step 21.1 identifies it with the desired $H^0$ group. [given, F1, F2, F3, F4, F5, step 21.1, algebra]

23.1 Now vary Y over the parameter space $P(\operatorname{Sym}^d V)$. On its incidence variety Z, take the relative minimal HN quotient Q of $p*F_d$ over the generic hypersurface and spread it as in Section1. Let $p=\operatorname{rank} Q$. The Picard group of Z, a projective bundle over $P^{3}$, is generated by the base O(1) and the parameter O(1); this follows by trivializing a line bundle on the projective fibres after removing its fibre degree and pushing its unit evaluation map. Extend the determinant from the generic parameter open by taking the closure of its Cartier divisor; Z is smooth. Thus det $Q|Y=O_Y(s)$ for an integer s, and $μ(Q|Y)=ds/p$. Its dual determinant gives a nonzero section of $Λ^p F_d$ dual|Y(s). By the Koszul estimate, [given, F1, F2, F3, F4, F5, step 22.1, algebra]

24.1 s≥−(p+1)d/(N−1). [given, F1, F2, F3, F4, F5, step 23.1, algebra]

25.1 The minimal HN slope is negative because $μ(F_d|Y)=−d^{2}/(N−1)<0$. Hence s is a negative INTEGER and $s≤−1$, which forces $p≥(N−1−d)/d$. Combining the two inequalities yields [given, F1, F2, F3, F4, F5, step 24.1, algebra]

26.1 $μ_{\operatorname{min}}(F_d|Y)=ds/p≥−d^{2}/(N−1−d)$. [given, F1, F2, F3, F4, F5, step 25.1, algebra]

27.1 The determinant integrality is a relative-incidence statement; Pic(Y)=Z is NOT assumed, and indeed need not hold. [given, F1, F2, F3, F4, F5, step 26.1, algebra]

28.1 Choose four sections of A with no common zero. They give a finite surjective $φ:X→P^{3}: A=φ*O(1)$ is ample, so no fibre can contain a curve; the image has dimension three and is closed. The degree is $D=A^{3}$. Let $Z_X$ be the base change of the degree-d incidence $Z→P^{3}$, with $p_X:Z_X→X$ and $q_X$ to the same hypersurface parameter space. It is a projective bundle over X. A general $q_X$ fibre is $S=φ$ inverse(Y), smooth by characteristic-zero Bertini for this basepoint-free system; it is connected because it is a smooth ample divisor on the integral threefold. For a direct numerical proof, if $S=S1$ disjoint-union S2 with nonempty divisor parts, $S1·S2·A=0$ while $Si^{2}·A=Si·S·A=d Si·A^{2}>0$. The Hodge-index form on real (1,1) classes with pairing $B(C1,C2)=C1·C2·A$ has one positive direction, so two positive orthogonal vectors are impossible. This Hodge-index identity follows from the ordinary Kähler primitive-form identity: for a real harmonic primitive (1,1) form η on a threefold, $*η=−η∧ω$, so $\int η^{2}∧ω=−||η||^{2}$; the ω direction is positive. Harmonic decomposition into that direction and its primitive orthogonal complement gives index one. It is not a sheaf discriminant inequality. Smoothness plus connectedness makes it integral. [given, F1, F2, F3, F4, F5, step 27.1, algebra]

29.1 On the $P^{3}$ incidence the relative tangent along p, restricted to Y, is $F_d|Y/O_Y$. The trivial subline is the defining polynomial of Y, and the quotient is the tangent space to the projective space of hypersurfaces through the point. Base change gives the analogous relative tangent on $Z_X$. Section1's finite-pullback assertion and Section3 therefore yield [given, F1, F2, F3, F4, F5, step 28.1, algebra]

30.1 $μ_{\operatorname{min}}(T_{Z_X/X}|S)≥−D d^{2}/(N−d−1)$. [given, F1, F2, F3, F4, F5, step 29.1, algebra]

31.1 This is the required incidence/descent estimate. The only lower bound used is the explicit homogeneous-kernel/Koszul estimate; no Chern discriminant has entered. [given, F1, F2, F3, F4, F5, step 30.1, algebra]

32.1 Suppose the geometric generic S has E|S unstable. Its relative HN filtration on an open of $Z_X$ is $0=E_0⊂E_1⊂⋯⊂E_l=p_X*E$. At each proper cut i the relative connection along $p_X$ induces the O-linear second fundamental map [given, F1, F2, F3, F4, F5, step 31.1, algebra]

33.1 $II_i:T_{Z_X/X}→\operatorname{Hom}(E_i,p_X*E/E_i)$. [given, F1, F2, F3, F4, F5, step 32.1, algebra]

34.1 If $II_i$ were zero at the generic point, the generic Grassmannian subspace would descend to K(X). Indeed on a projective-space fibre of $p_X$ in characteristic zero, a rational function killed by every relative derivation belongs to K(X); apply this to the Plücker coordinate ratios. A descended generic subspace has a unique saturation $F_i⊂E$. Over codimension-one DVRs saturation commutes with the smooth flat pullback, by a basis of the free quotient, so $E_i$ and $p_X*F_i$ have the same generic determinants. Consequently $μ(E_i|S)=d μ_A(F_i)$. The proper initial HN segment has slope greater than $μ(E|S)=d μ_A(E)$, contradicting semistability of E. Thus $II_i$ is nonzero. [given, F1, F2, F3, F4, F5, step 33.1, algebra]

35.1 On the generic fibre, pass each torsion-free HN factor to its reflexive hull, a vector bundle on the smooth surface. The codimension-two change preserves slopes and semistability, by the intersection argument of Section6. The tensor/Hom consequence over the geometric generic field K follows from the stated C theorem as follows, without embedding K into C. If semistable bundles A,B over K had a destabilizing subsheaf F of Hom(A,B), descend the smooth polarized surface, bundles, inclusion $F⊂\operatorname{Hom}(A,B)$, and its coherent quotient to a finitely generated integral C-algebra $R⊂K$. After shrinking Spec R, smoothness, projectivity, flatness of these sheaves and the exact inclusion persist, and their ranks and degrees are constant by their Hilbert polynomials. The geometric generic A,B are semistable: any destabilizer over an algebraic closure of Frac R would persist under extension to K. Step 10.1 therefore gives a nonempty open base on which both are semistable. Choose a closed complex point in this open. The descended F has the same strict slope inequality there, contradicting Hom semistability over C in F1. This proves Hom semistability over K; the identical argument proves tensor semistability. Ordinary dual semistability already follows from quotient-slope inequalities in step 1.1. The maximal slope of $\operatorname{Hom}(E_i,E/E_i)$ is at most $μ_{i+1}−μ_i$: filter it by the HN graded tensor-Hom factors and use the independently proved ordinary tensor semistability. A nonzero map from the incidence tangent therefore gives [given, F1, F2, F3, F4, F5, step 10.1, step 34.1, algebra]

36.1 0<μ_i−μ_(i+1)≤D d²/(N−d−1). [given, F1, F2, F3, F4, F5, step 35.1, algebra]

37.1 On the other hand every relative HN graded determinant extends to a line bundle on the smooth projective bundle $Z_X$. The projective-bundle Picard calculation writes it as $p_X*L⊗q_X*O(b)$. Its restriction to S has degree $d A^{2}c1(L)$, a multiple of d. Thus $μ_i=d a_i/r_i$ with $a_i$ integer, and any positive adjacent gap is at least $d/(r_i r_{i+1})$. Since $r_i+r_{i+1}≤r$, [given, F1, F2, F3, F4, F5, step 36.1, algebra]

38.1 μ_i−μ_(i+1)≥d/max((r²−1)/4,1). [given, F1, F2, F3, F4, F5, step 37.1, algebra]

39.1 For even r the sharper product bound is $r^{2}/4$; the uniform displayed source bound $(r^{2}−1)/4$ arises because, if the ranks are equal, the numerator $a_i/r_i−a_{i+1}/r_{i+1}$ has denominator $r_i$ rather than $r_i^{2}$. Explicitly for equal k the gap is at least d/k, which is at least $d/\operatorname{max}((r^{2}−1)/4,1)$: for $r=2$ use the denominator1, and for $r≥3$ use $1/k≥2/r≥4/(r^{2}−1)$; for unequal ranks the maximal product is at most $(r^{2}−1)/4$. Rank one has no unstable filtration. This proves the stated uniform lower bound without a rounding error. [given, F1, F2, F3, F4, F5, step 38.1, algebra]

40.1 The quantitative hypothesis makes these lower and upper bounds incompatible. Hence the geometric generic S is semistable. Section1's ordinary openness gives a nonempty open set of such S in the subsystem $φ*|O_{P^{3}}(d)|$. In particular one such smooth S exists in |dA|. Apply step 10.1 to the FULL smooth divisor family |dA|, on the open where restrictions are torsion-free, containing such an S. This open is explicit here: let $R=E$ double-dual and $Q=R/E$; regular-local depth and Auslander--Buchsbaum make R locally free off finitely many points. Avoid those points and the zero-dimensional associated points of Q, and require the divisor to contain no associated curve of Q. These are open conditions, also available in the finite-projection subsystem. The divisor equation is then Q-regular, so $Tor_1(Q,O_S)=0$ and E|S injects into the bundle R|S, hence is torsion-free. The universal restriction family is flat because its defining equation is regular on every fiber E and the two terms of its Cartier multiplication sequence are flat over the parameter base. Step 10.1 now gives a nonempty Zariski-open semistable locus containing S in this full family. This last step is essential: a generic result in the finite-projection subsystem was not silently called a generic result in the full linear system. [given, F1, F2, F3, F4, F5, step 10.1, step 39.1, algebra]

41.1 The proof above works directly for a torsion-free E after removing its higher-codimension singularities from the generic incidence calculations. The following explicit reflexive reduction makes the surface sheaf interfaces particularly transparent. [given, F1, F2, F3, F4, F5, step 40.1, algebra]

42.1 Set $R=E$ double-dual and $Q=R/E$. The quotient is supported in codimension at least two, so $c1(R)=c1(E)$. Every subsheaf $F⊂R$ intersects E in a subsheaf with the same rank and codimension-one determinant, hence $μ(F)≤μ(E)$. Thus R is semistable. [given, F1, F2, F3, F4, F5, step 41.1, algebra]

43.1 A reflexive sheaf on a regular local ring has depth at least min(2,dimension). At a codimension-one or codimension-two point of the smooth threefold, the local ring has dimension at most two. A finite free resolution and its depth computation (Auslander–Buchsbaum, obtained by successively applying the depth lemma to a minimal resolution) force projective dimension zero. Hence R is locally free outside finitely many points. General surfaces avoid those points. This uses no semistable-bundle inequality. [given, F1, F2, F3, F4, F5, step 42.1, algebra]

44.1 Choose S also avoiding every zero-dimensional associated point of Q and containing no positive-dimensional associated component. A general section of a very ample power has these properties. Its local equation is a nonzerodivisor on Q, so $Tor_1(Q,O_S)=0$. The restriction sequence gives [given, F1, F2, F3, F4, F5, step 43.1, algebra]

45.1 0→E|S→R|S→Q|S→0, [given, F1, F2, F3, F4, F5, step 44.1, algebra]

46.1 where Q|S is zero-dimensional. Therefore E|S is torsion-free and c1(E|S)=c1(R|S). Every positive-rank subsheaf of E|S is a subsheaf of the semistable R|S with the same ambient slope. It has slope at most that of E|S, proving the required semistability. This also shows precisely why intersecting the codimension-two defect of E is harmless, whereas avoiding only the finite reflexive singular set would not itself prove the restriction sequence injective. [given, F1, F2, F3, F4, F5, step 45.1, algebra] ∎

---
id: lem-ising-unitary-normal-data-and-ribbon-coherence
kind: lemma
title: "All-label unitary Ising normal data and ribbon coherence"
status: draft
dependency_level: 6
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-qc-tqc-unitary-fusion-category
  - def-qc-tqc-fusion-multiplicity-space
  - def-qc-tqc-f-symbol
  - def-qc-tqc-r-symbol
  - def-braiding
  - def-pivotal-structure
  - def-twist-and-ribbon-structure
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jacob Siehler, Braided Near-Group Categories"
      url: "https://arxiv.org/pdf/math/0011037"
    - title: "David Penneys, Unitary Fusion Categories"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
    - title: "Chetan Nayak et al., Non-Abelian Anyons and Topological Quantum Computation"
      url: "https://arxiv.org/pdf/0707.1889"
    - title: "Shu-Heng Shao, What’s Done Cannot Be Undone"
      url: "https://arxiv.org/pdf/2308.00747"
---

## Statement

Put $G=\mathbb Z/2=\{0,1\}$, with $0=\mathbf1$, $1=\eta$, and a third simple $D$. Use $ab=a+b$, $aD=Da=D$, and $DD=0\oplus1$, with summands ordered $(0,1)$ and every nonzero elementary fusion multiplicity equal to one. Let $d=\sqrt2$, $\kappa\in\{-1,1\}$, $\tau=\kappa/d$, $\chi(a,b)=(-1)^{ab}$, $u(0)=1$, $u(1)=i$, and choose $\beta$ of modulus one with $\beta^2=\tau(1+i)$. There is a unitary skeletal spherical ribbon fusion category with canonical orthonormal summand vertices and the following complete normal data. All admissible one-dimensional F blocks are $1$, except $F_D^{\eta D\eta}=F_\eta^{D\eta D}=-1$, and
$$F_D^{DDD}=\frac\kappa{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}.$$
Rows are right-tree channels $(f,1,1)$ and columns left-tree channels $(e,1,1)$ in the inverse-precomposition convention. Unit blocks are identities and impossible channels have the unique empty matrix. The associator permutes the $DD$ summand by addition of a group input when needed; its complete formula and pentagon are proved below.

The object braiding is $c_{a,b}=\chi(a,b)$, $c_{a,D}=c_{D,a}=u(a)$, and $c_{D,D}^g=\beta/u(g)$. The pullback R symbols are their inverses, in the specified canonical vertices. Both hexagons hold in every channel. The normalized self-duality has $\operatorname{coev}_D=\sqrt d\,i_{DD}^0$, $\operatorname{ev}_D=\kappa\sqrt d\,p_{DD}^0$, FS sign $\kappa$, positive pivotal dimension $d$, and twist $\theta_D=\kappa/\beta$; $\eta$ has dimension and FS sign one and twist $-1$. The canonical left-dual tensorator is $\kappa$ on both $DD$ channels and one on all other channels; its double-dual tensorator is one on all ten admissible channels. Relative to those duals $j_D=\kappa$, $j_0=j_\eta=1$, and $j_{a\otimes b}=\nu_{a,b}(j_a\otimes j_b)$ holds channel by channel. For explicit phase specializations write $s=e^{\pi i/8}$. These assertions construct the full category; they do not assume a sector example as a supplier.

## Facts & Assumptions

**Given:** The skeletal fusion rule, canonical summand vertices, the parameters $\kappa,\tau,\chi,u,\beta$, and the typed F/R conventions stated above. Every construction is finite and uses no choice principle.

[F1] A unitary fusion category has dagger-preserving tensor product and unitary associators and unitors; its orthogonal simple summand inclusions satisfy the isometry and completeness identities ([[def-qc-tqc-unitary-fusion-category]], Definition).

[F2] Elementary multiplicity spaces are $V_{ab}^c=\operatorname{Hom}(a\otimes b,c)$; the F-symbol is the inverse-precomposition coordinate matrix with target-tree rows, source-tree columns, and all multiplicity indices retained ([[def-qc-tqc-fusion-multiplicity-space]], Definition; [[def-qc-tqc-f-symbol]], Definition).

[F3] The R convention is the pullback $f\mapsto f\circ c_{a,b}^{-1}$; the braiding, pivotal and ribbon definitions fix the hexagons, monoidality and dual-compatible twist conditions ([[def-qc-tqc-r-symbol]], Definition; [[def-braiding]], Definition; [[def-pivotal-structure]], Definition; [[def-twist-and-ribbon-structure]], Definition).

## Proof

**Proof technique:** construct the finite skeletal category, check every associativity and braiding channel, and compute its dual and pivotal tensorators.

1.1 Let $G=\mathbb Z/2=\{0,1\}$, with $0=\mathbf1$, $1=\eta$, and a third simple $D$. Set $ab=a+b$ for $a,b\in G$, $aD=Da=D$, and $DD=0\oplus1$. Objects are finite ordered sums of these simples, Hom spaces are the corresponding complex matrix blocks, dagger is ordinary matrix adjoint, and tensor on morphisms is the block tensor/convolution induced by the fusion sums. Order the summands of $DD$ as $(0,1)$. Every nonzero elementary multiplicity is one, with specified canonical summand inclusion $i_{ab}^c$ and retraction $p_{ab}^c=(i_{ab}^c)^\dagger$, and multiplicity coordinate $\mu=1$; impossible channels have multiplicity zero. This fixes the bases before any coefficient is calculated. [F1, F2, F3, given, construct, algebra]

2.1 Put $d=\sqrt2$, $\chi(a,b)=(-1)^{ab}$, $\kappa\in\{-1,1\}$ and $\tau=\kappa/d$. Take identity unit constraints. For $a,b,c\in G$, define the entire associator by $\alpha_{a,b,c}=\alpha_{a,b,D}=\alpha_{D,a,b}=1$, $\alpha_{a,D,b}=\chi(a,b)$, $\alpha_{D,a,D}|_z=\chi(a,z)$ for $z\in G$, and $\alpha_{D,D,D}[f,e]=\tau\chi(e,f)$ for $e,f\in G$. The maps $\alpha_{a,D,D}$ and $\alpha_{D,D,a}$ have coefficient one on the equal simple output, after relabelling the $DD$ summand by addition of $a$. This specifies the direct-sum permutations as well as their scalars. For fixed total $z$, the target row is $(f,\mu_{bc}^f=1,\mu_{af}^z=1)$ and the source column is $(e,\mu_{ab}^e=1,\mu_{ec}^z=1)$; a coefficient exists only when all four fusion multiplicities are one. [step 1.1, algebra]

3.1 In the ordered channels $(0,1)$ the unique two-dimensional block is $F_D^{DDD}=\frac\kappa d\begin{pmatrix}1&1\\1&-1\end{pmatrix}$. Every other admissible block is $1\times1$ and equals $+1$, except $F_D^{\eta D\eta}=F_\eta^{D\eta D}=-1$. Unit-input blocks are identities, and an impossible fixed-total space has the unique $0\times0$ matrix. These real matrices and the summand permutations are orthogonal, so their inverse-transposes give exactly the same coefficients. Hence the object associators of step 2.1 are also the F coefficients in the library's inverse-precomposition convention, with no suppressed transpose, inverse, channel, or multiplicity coordinate. [step 2.1, algebra]

4.1 Write $A_z^{abc}[f,e]$ for those associator coefficients, and set them to zero on inadmissible channels. Start at $(((ab)_e c)_f t)_z$ and end at $(a(b(ct)_g)_h)_z$. The root/root route and the left/root/right route around the pentagon give, respectively, the two sides of $A_z^{e c t}[g,f]A_z^{a b g}[h,e]=\sum_u A_f^{a b c}[u,e]A_z^{a u t}[h,f]A_h^{b c t}[g,u]$. This follows by applying each rotation to the indicated subtrees, retaining every spectator output and multiplicity coordinate. We verify all sixteen placements of group objects and $D$ in this indexed equation, rather than using a classification theorem. [step 3.1, algebra]

5.1 With zero $D$ inputs both pentagon routes have coefficient one. With one $D$ input, the four placements reduce in order to the following equalities: $\begin{array}{c|l}(D,a,b,c)&1=1\\(a,D,b,c)&\chi(a,b+c)=\chi(a,b)\chi(a,c)\\(a,b,D,c)&\chi(a+b,c)=\chi(a,c)\chi(b,c)\\(a,b,c,D)&1=1\end{array}$. They hold for all free group labels by bicharacter multiplicativity. [step 4.1, algebra]

6.1 For two $D$ inputs the six placements reduce to $\begin{array}{c|l}(D,D,a,b)&1=1\\(D,a,D,b)&\chi(a,x+b)=\chi(a,x)\chi(a,b)\\(D,a,b,D)&\chi(a,z)\chi(b,z)=\chi(a+b,z)\\(a,D,D,b)&1=1\\(a,D,b,D)&\chi(b,a+y)=\chi(a,b)\chi(b,y)\\(a,b,D,D)&1=1\end{array}$. Here $x$ is the preceding $DD$ output, and $z$ or $a+y$ is the total group output; admissibility forces these labels in the indexed equation. There is exactly one admissible term in its sum over $u$. All six identities follow from symmetry and multiplicativity of $\chi$. [step 5.1, algebra]

7.1 With three $D$ inputs, let $a$ be the group input and $x,y$ the initial and final corresponding two-$D$ output labels. The four placements give $\begin{array}{c|l}(D,D,D,a)&\tau\chi(x,a)\chi(x,y)=\tau\chi(x,a+y)\\(D,D,a,D)&\tau\chi(x,y)=\tau\chi(x+a,y)\chi(a,y)\\(D,a,D,D)&\tau\chi(x,y)=\chi(a,x)\tau\chi(x,a+y)\\(a,D,D,D)&\tau\chi(x,y)\chi(a,y)=\tau\chi(x+a,y)\end{array}$. The middle associator forces each shifted label $x+a$ or $y+a$. Multiplicativity, symmetry and $\chi^2=1$ prove every entry for all free channel labels. [step 6.1, algebra]

8.1 With four $D$ inputs, let $x$ be the initial $DD$ channel, $y$ the final $DD$ channel and $z\in G$ the total. The short route has coefficient $\delta_{y,x+z}$. The long route has coefficient $\tau^2\sum_{u\in G}\chi(x,u)\chi(u,z)\chi(u,y)=\tau^2\sum_u(-1)^{u(x+y+z)}=2\tau^2\delta_{y,x+z}=\delta_{y,x+z}$, since $2\tau^2=1$. Steps 5.1–8.1 exhaust all sixteen placements, every free group/channel label, and every pentagon entry; a nonexistent fusion path gives an empty equality. Every unit-input coefficient agrees with the identity unitor, so the triangle holds. The orthogonal F matrices and ordinary block dagger now give a unitary monoidal category. [step 7.1, algebra]

9.1 Set $u(0)=1$, $u(1)=i$ and choose a unit-modulus $\beta$ with $\beta^2=\tau(1+i)$. Define all object braiding coefficients by $c_{a,b}=\chi(a,b)$ for $a,b\in G$, $c_{a,D}=c_{D,a}=u(a)$, and $c_{D,D}^g=v(g)=\beta/u(g)$ for $g\in G$. This covers every channel, including units, and all entries have modulus one. Expanding the two hexagons in the normal summand bases reduces their independent equations to $c_{a,b}=\chi(a,b)$, $u(a+b)=u(a)u(b)\chi(a,b)$, $u(a)v(a+b)=\chi(a,b)v(b)$, $u(a)^2=\chi(a,a)$, and $\tau\sum_{c\in G}\chi(a+b,c)u(c)=\chi(a,b)v(a)v(b)$. [step 8.1, algebra]

10.1 For completeness, the all-group hexagon is bicharacter multiplicativity; the placements $abD$ and $aDb$ give $c_{a,b}=\chi(a,b)$; $Dab$ gives the quadratic equation for $u$; $DDa$ and $DaD$ give the transport equation for $v$; $aDD$ gives $u(a)^2=\chi(a,a)$; and $DDD$ gives the final equation of step 9.1 entry by entry. In that last case the full matrix equality is $A\operatorname{diag}(u)A=\operatorname{diag}(v)A\operatorname{diag}(v)$ with $A=\tau(\chi(a,b))_{a,b}$; cancelling one $\tau$ and combining the character factors gives the displayed sum. The other hexagon reverses these placements and replaces $\chi$ by $\chi^{-1}$, so it gives the same five equations because $\chi=\chi^{-1}$ and both mixed braidings are $u$. This accounts for all eight typed summand patterns of each hexagon. [step 9.1, algebra]

11.1 The only nontrivial quadratic case is $u(1+1)=1=i^2(-1)$, and the nontrivial transport cases are $iv(1)=v(0)$ and $iv(0)=-v(1)$. For the last equation of step 9.1 the four pairs $(a,b)$ give $\begin{array}{c|l}(0,0)&\tau(1+i)=\beta^2\\(1,0),(0,1)&\tau(1-i)=-i\beta^2\\(1,1)&\tau(1+i)=-(-i\beta)^2=\beta^2\end{array}$. Each follows from $\beta^2=\tau(1+i)$. Thus both hexagons hold in every channel; none of the braiding data has been inferred solely from a two-channel braid relation. [step 10.1, algebra]

12.1 Let $s=e^{\pi i/8}$. At $\kappa=1$, $\beta_+=s$, inverse pullback gives the complete table $R_{0a}^a=R_{a0}^a=1$, $R_{\eta\eta}^0=-1$, $R_{\eta D}^D=R_{D\eta}^D=-i$, $R_{DD}^0=s^{-1}=e^{-\pi i/8}$ and $R_{DD}^\eta=is^{-1}=e^{3\pi i/8}$. At $\kappa=-1$, $\beta_-=-s^{-3}$, the unit/group/mixed entries are identical, while $R_{DD}^0=-s^3$ and $R_{DD}^\eta=s^{-1}$. Every displayed elementary multiplicity index is one, and a nonexistent channel is empty. These are pullback matrices of $f\mapsto f\circ c_{a,b}^{-1}$, rather than object coefficients with only selected phases inverted. [step 11.1, algebra]

13.1 For a group simple $a$, take $\operatorname{coev}_a=i_{aa}^0$ and $\operatorname{ev}_a=p_{aa}^0$. For $D$, take $\operatorname{coev}_D=\sqrt d\,i_{DD}^0$ and $\operatorname{ev}_D=\kappa\sqrt d\,p_{DD}^0$. The $D$ snake scalar is $\kappa d(F_D^{DDD})_{0,0}=\kappa d\tau=1$, and reflection proves the other snake; group snakes have scalar one. Thus every object is rigid and the normalized FS sign of $D$ is $\kappa$. Choose right coevaluation $\kappa\sqrt d\,i_{DD}^0$ and right evaluation $\sqrt d\,p_{DD}^0$ for $D$; both positive left/right dimensions are $d$, although $\operatorname{ev}_D\operatorname{coev}_D=\kappa d$. The dimension and FS of $\eta$ are one. On a finite sum, the candidate left/right trace is $\sum_a d_a\operatorname{Tr}(M_a)$, where $d_0=d_\eta=1$ and $d_D=d$; we verify its pivotal compatibility explicitly below. [step 12.1, algebra]

14.1 Let $E_c=i_{ab}^cp_{ab}^c$. Inserting the normalized $a$ cup, rotating by $\alpha_{a,a,b}$, applying $E_c$, rotating back and using the positive $a$ cap gives $\operatorname{ptr}_a(E_c)=d_a|A_b^{a a b}[c,0]|^2 1_b=(d_c/d_b)1_b$. Closing $b$ similarly gives $\operatorname{ptr}_b(E_c)=d_b|A_a^{a b b}[0,c]|^2 1_a=(d_c/d_a)1_a$. The entire nonunit calculation is $\begin{array}{c|cc}(a,b;c)&\operatorname{ptr}_a&\operatorname{ptr}_b\\(\eta,\eta;0)&1&1\\(\eta,D;D)&1&d\\(D,\eta;D)&d&1\\(D,D;0)&1/d&1/d\\(D,D;\eta)&1/d&1/d\end{array}$. The first three rows use scalar F entries of modulus one; the last two use $|\tau|^2=1/2$ and $d/2=1/d$. Unit rows are identity traces. In particular all FS signs occur twice and cancel. [step 13.1, algebra]

15.1 Relative to these left duals the standard-conjugate comparison is $j_a=(\operatorname{coev}_a^\dagger\otimes1_{a^{**}})\alpha^{-1}(1_a\otimes\operatorname{coev}_{a^*})$, with typed dual comparisons and unitors inserted. It equals one on a group simple and $d\tau=\kappa$ on $D$. Direct sums use their orthogonal summand inclusions. Iterating the last-vertex calculation of step 14.1 on fusion-path matrix units gives zero off the diagonal and the endpoint dimension on the diagonal; the pentagon makes it tree-independent. These units span every Hom block, and the weighted matrix pairing is nondegenerate. The fusion-dimension equations $d_ad_b=\sum_cN_{ab}^cd_c$ and those same units prove tensor multiplicativity of the trace. Thus the left/right closures both equal $\sum_ad_a\operatorname{Tr}(M_a)$; this is the trace produced by the dualities, rather than an independently assigned dimension function. The following typed tensorator calculation verifies monoidality of $j$ without assuming a canonical positive pivot. [step 14.1, algebra]

16.1 Choose the left dual of a direct sum by its orthogonal simple summands. Its contravariant tensorator $q_{a,b}:b^*\otimes a^*\longrightarrow(a\otimes b)^*$ is uniquely characterized by $\operatorname{ev}_{a\otimes b}(q_{a,b}\otimes1_{a\otimes b})=E_{a,b}$, where $E_{a,b}$ is folded evaluation: reassociate $(b^*\otimes a^*)\otimes(a\otimes b)$ to $b^*\otimes((a^*\otimes a)\otimes b)$, evaluate the middle $a$ pair and then the outer $b$ pair. Uniqueness follows from the two snakes. This fixes all types before taking its channel scalars. [step 15.1, algebra]

17.1 Put $k_a=1$ for $a\in G$ and $k_D=\kappa$. On a canonical $c$ summand, evaluation of both sides of step 16.1 after the $c$ cup gives $q_{a,b}^c=\frac{k_ak_b}{k_c}\sqrt{\frac{d_ad_b}{d_c}}A_0^{b a c}[b,c]A_b^{a a b}[c,0]$. Indeed the first rotation takes $((ba)_c(ab)_c)_0$ to $b(a(ab)_c)$ with coefficient $A_0^{b a c}[b,c]$; the inverse right rotation makes the inner $aa$ channel vacuum with coefficient $A_b^{a a b}[c,0]$. The two evaluations contribute $k_a\sqrt{d_a}k_b\sqrt{d_b}$, the initial $c$ cup contributes $\sqrt{d_c}$, and its comparison cap/cup has scalar $k_cd_c$. Their quotient is the stated formula, derived entirely from the specified dualities and F data. [step 16.1, algebra]

18.1 The complete channel computation is $\begin{array}{c|cccc}(a,b;c)&q_{a,b}^c&\nu_{a,b}^c&j_c&j_aj_b\\(0,0;0)&1&1&1&1\\(0,\eta;\eta)&1&1&1&1\\(\eta,0;\eta)&1&1&1&1\\(0,D;D)&1&1&\kappa&\kappa\\(D,0;D)&1&1&\kappa&\kappa\\(\eta,\eta;0)&1&1&1&1\\(\eta,D;D)&1&1&\kappa&\kappa\\(D,\eta;D)&1&1&\kappa&\kappa\\(D,D;0)&\kappa&1&1&1\\(D,D;\eta)&\kappa&1&1&1\end{array}$. For either $DD$ row the two F factors of step 17.1 are $1,\tau$, and the dimension factor is $d$, so $q=d\tau=\kappa$. In mixed rows both F factors, the dimension quotient, and $k_ak_b/k_c$ are one; unit/group rows are immediate. All entries are real unit scalars. [step 17.1, algebra]

19.1 The typed double-dual tensorator is $\nu_{a,b}:a^{**}\otimes b^{**}\longrightarrow(a\otimes b)^{**}$ with $\nu_{a,b}=(q_{a,b}^*)^{-1}q_{b^*,a^*}$. On a $c$ summand its coefficient is $q_{b,a}^c/q_{a,b}^c=1$, as recorded in step 18.1. The equality of that table's last columns therefore proves $j_{a\otimes b}=\nu_{a,b}(j_a\otimes j_b)$ on all ten admissible channels. Scalar simple components give naturality, chosen sum duals give additivity, and pairwise monoidality extends to arbitrary products by coherence of the canonical dual tensorator. Together with steps 13.1–15.1 this gives a positive spherical pivotal structure with the asserted FS signs and trace. [step 18.1, algebra]

20.1 The positive pivotal curl on $D$ is fixed by partial trace: $\theta_D=(v(0)+v(1))/d=\beta(1-i)/d=\kappa/\beta$, since $\beta^2=\kappa(1+i)/d$. The group twists are $\theta_0=1$ and $\theta_\eta=-1$. Balancing holds in every channel: group-group crossings square to one; mixed crossings square to $-1=\theta_D/(\theta_\eta\theta_D)$; and on $DD$ one has $v(g)^2=\theta_g/\theta_D^2$ because $u(g)^2=\chi(g,g)=\theta_g$. All labels are self-dual and scalar twist equals its dual, so the ribbon condition holds. In particular the negative-sign parameters $\beta_-=-s^{-3}$ give $\theta_D=-1/\beta_-=s^3$, while the positive-sign parameters $\beta_+=s$ give $\theta_D=1/\beta_+=s^{-1}$; in both cases $\theta_\eta=-1$. This proves all normal-data, coherence, duality, pivotal, FS and ribbon claims. [step 19.1, algebra] ∎

## Remarks

The full source reading and exact finite checks are recorded in the isolated Ising receipt. Siehler gives the full hexagon reduction but cites Tambara–Yamagami for the monoidal classification; the complete pentagon is proved locally here. Penneys leaves Ising F extraction as an exercise. The physical R vocabulary in Nayak is not substituted for the library's inverse-pullback convention. Finite scripts corroborate the proofs and do not assert a readiness or audit stamp.

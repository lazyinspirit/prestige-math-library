from pathlib import Path
import json
pages=json.load(open('research/frontier-43-complex-representation-15-batch-10.pages.json'));rows={x['id']:x for p in pages for x in p['items']}
def write(id,deps,body):
 r=rows[id];kind=r['kind'];head='---\nid: '+id+'\nkind: '+kind+'\ntitle: '+json.dumps(r['title'])+'\nstatus: draft\norigin: pipeline\npipeline_run: frontier-43-complex-representation-15\nproof_strategy: direct\nprovenance:\n  statement: literature-derived\n  proof: ai-altered\ndependency_level: 14\ndeps:\n'+''.join('  - '+d+'\n' for d in deps)+'aliases: []\nlandmark: false\nverification:\n  precheck: pending\nsources:\n  references: '+json.dumps(r['sources']['references'],ensure_ascii=False)+'\n---\n\n';Path('items/'+id+'.md').write_text(head+body)
write('thm-projective-embedding-compact-riemann-surface',[
'def-axiom-of-choice','def-divisor-principal-and-canonical-divisor-riemann-surface','def-line-bundle-associated-to-a-divisor','def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface','thm-riemann-roch-compact-riemann-surfaces','thm-serre-duality-compact-riemann-surfaces','thm-linear-system-map-to-projective-space-is-well-defined','def-complex-projective-space-and-holomorphic-charts','cor-holomorphic-functions-are-real-analytic-and-smooth','cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding','def-smooth-immersion-and-embedding-for-manifolds-with-boundary'],r'''## Statement

Assume full AC ([[def-axiom-of-choice]]). Let $X$ be a compact Riemann surface of genus $g$, let $D$ be any divisor with $\deg D\ge2g+1$, and put $E=\mathcal O_X(D)$ and $N=\ell(D)-1$. Then:

1. $\ell(D)=\deg D+1-g\ge g+2$, and the complete linear system of holomorphic sections $H^0(X,E)$ is base-point-free. For every $p\in X$,
$$\ell(D-[p])=\ell(D)-1.$$
2. For distinct $p,q\in X$,
$$\ell(D-[p]-[q])=\ell(D)-2.$$
There are sections $s,t$ with $s(p)=0$, $s(q)\ne0$, $t(q)=0$, $t(p)\ne0$; hence the complete-linear-system map $\varphi_D:X\to\mathbb P^N(\mathbb C)$ is injective.
3. For every $p\in X$,
$$\ell(D-2[p])=\ell(D)-2.$$
There is a section with a zero of order exactly one at $p$, and $\varphi_D$ is a holomorphic immersion.
4. The map $\varphi_D$ is a holomorphic embedding, with its basis-independent intrinsic target $\mathbb P(H^0(X,E)^*)$ and the usual projective-coordinate change for a different basis ([[thm-linear-system-map-to-projective-space-is-well-defined]]).

Values and vanishing orders here are those of holomorphic bundle sections. If $h\in L(D)$ represents a section, its local holomorphic coefficient is $h f_i$ in a divisor-bundle frame with $s_D=f_i e_i$; the meromorphic function $h$ itself may have an allowed pole at $p$.

## Facts & Assumptions

**Given:** Full AC, compact $X$ of genus $g$, and $\deg D\ge2g+1$.

[F1] Full AC is the premise inherited from the cohomology and duality suppliers ([[def-axiom-of-choice]]).

[F2] Riemann–Roch gives $\ell(A)-i(A)=\deg A+1-g$, $\ell(0)=1$, $i(0)=g$, and existence of a canonical divisor $K$; Serre duality gives $i(A)=\ell(K-A)$ ([[thm-riemann-roch-compact-riemann-surfaces]], [[thm-serre-duality-compact-riemann-surfaces]]).

[F3] Negative-degree divisors have zero $L$-space, and principal divisors have degree zero ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F4] $H^0(X,\mathcal O_X(A))\cong L(A)$ via $h\mapsto h s_A$, and $s_A=f_i e_i$ with $(s_A)=A$. A section has zero divisor $(h)+A$ ([[def-line-bundle-associated-to-a-divisor]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F5] Holomorphic sections have holomorphic coefficients in local holomorphic frames, and a nonzero coefficient factors by its finite zero order ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).

[F6] A base-point-free finite-dimensional space of sections defines a canonical holomorphic map to the projectivization of its dual; in a local frame its coordinates are the section coefficients, and a basis change is a projective linear change ([[thm-linear-system-map-to-projective-space-is-well-defined]]).

[F7] Projective space has holomorphic affine charts and is a Hausdorff smooth manifold; holomorphic functions are smooth ([[def-complex-projective-space-and-holomorphic-charts]], [[cor-holomorphic-functions-are-real-analytic-and-smooth]]).

[F8] A smooth immersion has injective differential, and an embedding is an immersion and a homeomorphism onto its image. An injective smooth immersion from a compact manifold to a Hausdorff manifold is an embedding ([[def-smooth-immersion-and-embedding-for-manifolds-with-boundary]], [[cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding]]).

## Proof

1.1 Choose a canonical divisor $K$ by [F2]. Duality at $0$ gives $\ell(K)=g$ and at $K$ gives $i(K)=\ell(0)=1$, so Riemann–Roch at $K$ yields $\deg K=2g-2$. For $A=D,D-[p],D-[p]-[q]$ or $D-2[p]$, the degree is at least $2g-1>2g-2$. Thus [F3] gives $\ell(K-A)=0$, and [F2] gives $\ell(A)=\deg A+1-g$. This proves every displayed dimension drop and $\ell(D)\ge g+2$. [F1, F2, F3, given, algebra]

2.1 By [F4], sections vanishing at $p$ correspond exactly to $L(D-[p])$: in a local frame their zero order is $\operatorname{ord}_p(h)+D(p)$. Step 1.1 makes this a proper codimension-one subspace, so some section is nonzero at each $p$. Hence $H^0(X,E)$ is base-point-free and [F6] supplies $\varphi_D$. At distinct $p,q$, the sections vanishing at both form $L(D-[p]-[q])$, a proper subspace of $L(D-[p])$ by step 1.1; choose a section vanishing at $p$ but not at $q$, and symmetrically one vanishing at $q$ but not at $p$. If $\varphi_D(p)=\varphi_D(q)$, their nonzero evaluation functionals would be proportional and have the same kernel, contrary to those sections. Thus $\varphi_D$ is injective. [F4, F5, F6, step 1.1, choose, algebra]

3.1 Fix $p$. By step 1.1 choose a section $s\in H^0(E(-[p]))\setminus H^0(E(-2[p]))$, and by step 2.1 choose $t\in H^0(E)$ with $t(p)\ne0$. In a local coordinate $z$ centred at $p$ and a holomorphic frame $e$, write $s=a(z)e$, $t=b(z)e$; [F4] and [F5] give $a(z)=z u(z)$ with $u(0)\ne0$ and $b(0)\ne0$. Since $s,t$ are independent, extend them to a basis of $H^0(E)$. In the target affine chart corresponding to $t$, a coordinate of $\varphi_D$ is $a/b$, whose derivative at $p$ is $u(0)/b(0)\ne0$. Basis changes are holomorphic projective automorphisms by [F6], so the differential is nonzero for every basis. It is a nonzero complex-linear map from a one-dimensional complex tangent space, hence injective as a real-linear map. Thus [F7] and [F8] make $\varphi_D$ a smooth and holomorphic immersion. This argument uses the regular coefficients $h f_i$, even when the representing meromorphic functions have poles. [F4, F5, F6, F7, F8, step 1.1, step 2.1, choose, algebra]

4.1 The map is injective by step 2.1 and immersive by step 3.1; $X$ is compact and projective space is Hausdorff by [F7]. Hence [F8] makes it a homeomorphism onto its image and a smooth embedding. Its local expressions are holomorphic by [F6], so it is the asserted holomorphic embedding. The intrinsic target and basis covariance are those in [F6]. [F6, F7, F8, step 2.1, step 3.1] ∎
''')
write('ex-hyperelliptic-canonical-divisors',[
'def-axiom-of-choice','def-hyperelliptic-curve','thm-canonical-map-nonhyperelliptic-curve','cor-projective-embedding-every-smooth-proper-curve','thm-jacobian-criterion-smooth-morphism','lem-nonsingular-complex-algebraic-curve-holomorphic-charts','def-complex-projective-space-and-holomorphic-charts','cor-jacobian-presentation-differentials','thm-cotangent-space-maximal-ideal-quotient','thm-local-ring-smooth-curve-dvr','def-canonical-line-bundle-curve','def-nonconstant-morphism-curves-degree','cor-canonical-degree-two-g-minus-two','cor-h0-canonical-differentials-genus','thm-riemann-roch-compact-riemann-surfaces','thm-serre-duality-compact-riemann-surfaces','def-divisor-principal-and-canonical-divisor-riemann-surface','def-line-bundle-associated-to-a-divisor','thm-proper-holomorphic-map-riemann-surfaces-has-degree','thm-local-normal-form-holomorphic-map-riemann-surfaces','thm-meromorphic-functions-riemann-sphere-are-rational','thm-the-complex-numbers-are-algebraically-closed','lem-finite-type-jacobson-residue-extension','prop-components-of-a-topological-manifold-are-open-and-at-most-countable'],r'''## Example

Assume full AC ([[def-axiom-of-choice]]). Let $C$ be any smooth proper geometrically integral curve over $\mathbb C$ of algebraic genus $g\ge2$, with hyperelliptic map $\phi:C\to\mathbf P^1_{\mathbb C}$ of degree two, and put $L=\phi^*\mathcal O(1)$ ([[def-hyperelliptic-curve]]). Its complex points form a compact connected Riemann surface $X$ of topological genus $g$; the local holomorphic charts and the genus comparison are justified below, without presupposing a cohomology comparison theorem.

1. The canonical bundle satisfies $\omega_C\cong L^{\otimes(g-1)}$. For a general fibre $P+Q=\phi^{-1}(t)$ with $P\ne Q$,
$$K\sim(g-1)(P+Q),\qquad \deg K=2g-2,$$
both algebraically and on $X$.
2. For $D=(g-1)(P+Q)$, $\ell(D)=g$. After choosing the pulled-back monomial basis, the canonical map is
$$\phi_K=\operatorname{Ver}_{g-1}\circ\phi:C\longrightarrow\mathbf P^{g-1},$$
where $\operatorname{Ver}_{g-1}$ is the degree-$(g-1)$ Veronese embedding. It has degree two onto a rational normal curve and is not an embedding. Other canonical bases change only projective coordinates ([[thm-canonical-map-nonhyperelliptic-curve]]).
3. The analytic Riemann–Roch and duality check is
$$\ell(K)-\ell(0)=2g-2+1-g=g-1,\qquad \ell(0)=1,$$
so $\ell(K)=g=h^1(X,\mathcal O_X)$. The algebraic identities $h^0(C,\omega_C)=h^1(C,\mathcal O_C)=g$ agree. The restriction map from algebraic canonical sections to holomorphic differentials on $X$ is an isomorphism, so the algebraic and analytic canonical maps coincide under these coordinates.

## Facts & Assumptions

**Given:** Full AC; a smooth proper geometrically integral complex curve $C$ of algebraic genus $g\ge2$; its degree-two hyperelliptic map $\phi$ and $L=\phi^*\mathcal O(1)$.

[F1] Full AC is inherited by the algebraic and analytic duality and projectivity suppliers ([[def-axiom-of-choice]]).

[F2] The algebraic hyperelliptic canonical theorem gives $\omega_C\cong L^{\otimes(g-1)}$ and the Veronese factorization of its canonical map, of generic degree two and not a closed immersion. It has a basis of pulled-back degree-$(g-1)$ monomials ([[def-hyperelliptic-curve]], [[thm-canonical-map-nonhyperelliptic-curve]]).

[F3] Every smooth proper geometrically integral curve admits a closed projective embedding. Complex projective space is compact, Hausdorff and second countable ([[cor-projective-embedding-every-smooth-proper-curve]], [[def-complex-projective-space-and-holomorphic-charts]]).

[F4] Smoothness over $\mathbb C$ gives local polynomial presentations with $m-1$ equations and an invertible $(m-1)$-column Jacobian minor. The holomorphic implicit-function chart lemma gives a free-coordinate chart and holomorphic transitions ([[thm-jacobian-criterion-smooth-morphism]], [[lem-nonsingular-complex-algebraic-curve-holomorphic-charts]]).

[F5] The Kähler differential module of a polynomial quotient is given by its Jacobian relations. At a complex rational point, the map $\mathfrak m/\mathfrak m^2\to\Omega\otimes\mathbb C$, $[a]\mapsto da$, is an isomorphism ([[cor-jacobian-presentation-differentials]], [[thm-cotangent-space-maximal-ideal-quotient]]).

[F6] Smooth-curve local rings at closed points are DVRs, with every nonzero rational function a unit times an integral power of a uniformizer. The algebraic canonical bundle is $\Omega^1_{C/\mathbb C}$, and its divisor orders are coefficient orders in a regular frame ([[thm-local-ring-smooth-curve-dvr]], [[def-canonical-line-bundle-curve]]).

[F7] A nonconstant algebraic map of smooth proper curves is finite and surjective, and its degree is the weighted fibre sum of local DVR orders and residue degrees. For $\phi$ the degree is two. Closed-point residue fields on $C$ are $\mathbb C$ ([[def-nonconstant-morphism-curves-degree]], [[lem-finite-type-jacobson-residue-extension]], [[thm-the-complex-numbers-are-algebraically-closed]]).

[F8] The algebraic canonical divisor has degree $2g-2$ and $h^0(C,\omega_C)=h^1(C,\mathcal O_C)=g$ ([[cor-canonical-degree-two-g-minus-two]], [[cor-h0-canonical-differentials-genus]]).

[F9] On a compact Riemann surface of topological genus $h$, analytic RR and duality give $\ell(0)=1$, $i(0)=h$ and $i(A)=\ell(K-A)$; evaluating at $K$ gives $\deg K=2h-2$. Negative-degree divisors have no sections, and $\mathcal O_X(K)$ identifies with the canonical bundle ([[thm-riemann-roch-compact-riemann-surfaces]], [[thm-serre-duality-compact-riemann-surfaces]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]], [[def-line-bundle-associated-to-a-divisor]]).

[F10] Compact-manifold components are open and, by compactness, there are only finitely many. A proper nonconstant holomorphic map has positive weighted fibre degree; multiplicity one gives a holomorphic local inverse. Meromorphic functions on the sphere are rational ([[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]], [[thm-proper-holomorphic-map-riemann-surfaces-has-degree]], [[thm-local-normal-form-holomorphic-map-riemann-surfaces]], [[thm-meromorphic-functions-riemann-sphere-are-rational]]).

## Verification

1.1 Embed $C$ projectively by [F3]. Its complex points $X$ are closed in compact projective space because its homogeneous defining equations are continuous, so $X$ is compact, Hausdorff and second countable. At each point [F4] gives a standard smooth chart with one free coordinate $z$; the implicit-function lemma supplies a holomorphic graph chart, and the transitions are holomorphic. Thus each component of $X$ is a compact Riemann surface, with finitely many components by [F10]. An algebraic morphism is holomorphic in these charts: its coordinate functions are regular fractions whose denominators are nonzero near the point, and compositions with the graph chart are holomorphic. In particular $\phi$ induces a holomorphic map $X\to\widehat{\mathbb C}$. [F1, F3, F4, F10, given, construct]

2.1 In a standard smooth chart the invertible Jacobian minor lets [F5] eliminate all dependent coordinate differentials, leaving $dz$ as a regular algebraic frame of $\omega_C$ and as the analytic differential frame. The cotangent isomorphism in [F5] says $z-z(p)$ has nonzero class in the one-dimensional $\mathfrak m_p/\mathfrak m_p^2$; since the local ring is a DVR by [F6], it is an algebraic uniformizer. Any rational coefficient is therefore $(z-z(p))^a u$ with $a\in\mathbb Z$ and $u$ a regular unit; analytically $u$ is holomorphic with nonzero value at $p$, so its algebraic and analytic orders are equal. This also proves that a nonzero rational coefficient cannot vanish identically on an analytic neighbourhood. Consequently algebraic rational differentials become nonzero meromorphic differentials with precisely the same divisor, and regular differentials become holomorphic; the restriction of their section spaces is injective. Pullbacks and line-bundle isomorphisms have the same local regular transition formulas and therefore induce the corresponding holomorphic bundle maps. [F4, F5, F6, step 1.1, algebra]

3.1 On each component $X_j$, the map $\phi$ is nonconstant: if locally constant at a point over $t$, a local coordinate of the target vanishing at $t$ would pull back to an identically zero germ, contrary to the finite DVR order of that nonzero rational pullback in step 2.1 and [F7]. Compactness makes each restriction proper. By [F10], it has a positive integer analytic degree $d_j$. Equality of local orders in step 2.1 and the algebraic fibre formula [F7] give $\sum_j d_j=2$. If $X$ had two components, both degrees would be one. The fibre formula would then make each restriction bijective and unramified, and the local inverses in [F10] would make each component biholomorphic to the sphere. The sphere has no nonzero holomorphic differential: a holomorphic form is $a(z)dz$ with rational $a$ having no finite poles, hence polynomial; in $w=1/z$ it is $-a(1/w)w^{-2}dw$, which can be holomorphic only if $a=0$. But [F8] supplies a nonzero regular algebraic differential, whose restriction is nonzero by step 2.1 and holomorphic on every component; if every component were a sphere it would vanish everywhere, contradicting this injectivity. Thus $X$ is connected and $\phi:X\to\widehat{\mathbb C}$ has degree two. [F6, F7, F8, F10, step 1.1, step 2.1, algebra]

4.1 Choose a nonzero rational algebraic differential defining $K_C$. Step 2.1 identifies its algebraic divisor with the analytic canonical divisor $K$ on connected $X$, coefficient by coefficient. All residue degrees are one by [F7], so their degrees agree. If $h$ is the topological genus of $X$, [F8] and [F9] give $2g-2=\deg K_C=\deg K=2h-2$, hence $h=g$. Restriction of regular algebraic differentials is injective by step 2.1; its source has dimension $g$ by [F8] and its target has dimension $h=g$ by [F9], so it is an isomorphism. This proves the required canonical-section and genus comparison without assuming a general algebraic/analytic cohomology comparison. [F7, F8, F9, step 2.1, step 3.1, algebra]

5.1 A general fibre of the analytic degree-two map consists of two distinct points $P,Q$: [F10] makes the branch-value set finite. It is the same algebraic fibre by step 2.1. The pullback of the standard section of $\mathcal O(1)$ vanishing at $t$ has divisor $P+Q$ on $X$, so $L$ induces $\mathcal O_X(P+Q)$. The bundle isomorphism in [F2] and step 2.1 therefore give $K\sim D=(g-1)(P+Q)$. By [F9], $\ell(K)=g$ and linear equivalence gives $\ell(D)=g$; equivalently RR gives $\ell(D)-\ell(K-D)=g-1$ with $K-D\sim0$ and $\ell(0)=1$. The $g$ pulled-back monomial sections in [F2] are now a basis of both algebraic and analytic canonical spaces by step 4.1, so their coordinate map is precisely the Veronese factorization, up to a projective basis change. Since $P\ne Q$ have the same image under $\phi$, their canonical images agree; hence the canonical map is not an embedding and has degree two onto the rational normal curve. Finally [F8], [F9] and step 4.1 give all displayed RR and duality dimensions. [F2, F8, F9, F10, step 2.1, step 3.1, step 4.1, algebra] ∎
''')
write('ex-failed-principal-parts-problem-detected-by-residues',[
'def-axiom-of-choice','def-complex-lattice-and-complex-torus','thm-complex-torus-quotient-is-well-defined','def-meromorphic-differential-on-a-riemann-surface','def-principal-part-at-an-isolated-point','def-divisor-principal-and-canonical-divisor-riemann-surface','thm-riemann-roch-compact-riemann-surfaces','thm-serre-duality-compact-riemann-surfaces','thm-residue-theorem-compact-riemann-surface','thm-proper-holomorphic-map-riemann-surfaces-has-degree','thm-local-normal-form-holomorphic-map-riemann-surfaces','def-genus-and-euler-characteristic-compact-riemann-surface','cor-prescribed-principal-parts-compact-riemann-surface','def-cech-cohomology-holomorphic-line-bundle-sections','thm-grand-equivalence-for-simply-connected-plane-domains','def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface'],r'''## Example

Assume full AC ([[def-axiom-of-choice]]). Let $X=\mathbb C/\Lambda$ for a full complex lattice $\Lambda$, with origin $o=[0]$ and local quotient coordinate $z$ centred at $o$. Prescribe the function-valued principal parts
$$\eta_o=[1/z]\in\mathcal M_o/\mathcal O_o,\qquad \eta_p=0\quad(p\ne o).$$
There is no global meromorphic function with these principal parts. A putative solution would have divisor $[q]-[o]$ for a point $q\ne o$, and would give a degree-one proper holomorphic map to the sphere, contradicting the torus genus $1$.

The obstruction is the residue of a **differential**, rather than an invariant residue of a function germ: the nowhere-vanishing holomorphic differential $\omega=dz$ gives
$$\sum_{p\in X}\operatorname{Res}_p(\eta_p\omega)=\operatorname{Res}_o(dz/z)=1\ne0.$$
All holomorphic differentials are constant multiples of $dz$, so the corresponding residue functional is $c\,dz\mapsto c$. For a finite good cover and compatible comparison data as constructed below, the necessary-and-sufficient criterion of [[cor-prescribed-principal-parts-compact-riemann-surface]] detects exactly this obstruction.

## Facts & Assumptions

**Given:** Full AC, a full lattice $\Lambda$, its torus $X$, and the principal part $1/z$ at $o$ with zero principal parts elsewhere.

[F1] Full AC is inherited through RR, duality and the good-cover comparison chain ([[def-axiom-of-choice]]).

[F2] The quotient torus is compact with local lift charts and translation transitions. Its proof gives $\delta>0$ such that distinct lattice points are separated by at least $\delta$ ([[def-complex-lattice-and-complex-torus]], [[thm-complex-torus-quotient-is-well-defined]]).

[F3] A principal part is a finite negative Laurent polynomial. A differential's residue is its coefficient of $z^{-1}dz$, independent of coordinates ([[def-principal-part-at-an-isolated-point]], [[def-meromorphic-differential-on-a-riemann-surface]]).

[F4] Analytic RR gives $\ell(0)=1$, $i(0)=g$ and the canonical-divisor formula; Serre duality gives $i(A)=\ell(K-A)$ ([[thm-riemann-roch-compact-riemann-surfaces]], [[thm-serre-duality-compact-riemann-surfaces]]).

[F5] Principal divisors have degree zero; meromorphic functions on compact $X$ are proper maps to the sphere when nonconstant, with pole order equal to fibre multiplicity ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F6] Proper nonconstant holomorphic maps have positive weighted fibre degree, and multiplicity one gives a holomorphic local inverse; genus is invariant under biholomorphism and the sphere has genus zero ([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]], [[thm-local-normal-form-holomorphic-map-riemann-surfaces]], [[def-genus-and-euler-characteristic-compact-riemann-surface]]).

[F7] The residues of a global meromorphic differential on compact $X$ sum to zero ([[thm-residue-theorem-compact-riemann-surface]]).

[F8] A finite good cover has disc chart members and disc-biholomorphic nonempty finite intersections. Under full AC a contractible proper plane domain is biholomorphic to a disc by the grand simple-connectivity equivalence ([[def-cech-cohomology-holomorphic-line-bundle-sections]], [[thm-grand-equivalence-for-simply-connected-plane-domains]]).

[F9] Compatible metrics exist under countable choice, hence full AC ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).

[F10] For a supplied finite good cover and comparison data, principal parts are realizable if and only if their residue sum paired against every holomorphic differential is zero; the pairing is independent of representatives and cover ([[cor-prescribed-principal-parts-compact-riemann-surface]]).

## Verification

1.1 By [F2], local lift coordinates differ by translations, so their differentials glue to a nowhere-zero holomorphic differential $\omega=dz$ with $K=(\omega)=0$. By [F4], $i(0)=\ell(K)=\ell(0)=1$, so $g=1$ and $h^0(X,K_X)=1$. Thus every holomorphic differential is $c\,dz$. The prescribed principal part is nonzero by [F3] and would force a simple pole at $o$ with no other poles. [F1, F2, F3, F4, given, algebra]

2.1 If a meromorphic function $f$ realized the data, [F5] would give $(f)=E-[o]$ with $E$ effective of degree one. Hence $E=[q]$ and $q\ne o$. The weighted fibre over infinity has one simple point, so [F6] gives degree one; every fibre is then one point of multiplicity one. The local holomorphic inverses in [F6] glue to a global inverse, making $X$ biholomorphic to the sphere, contrary to $g=1$ in step 1.1. Independently, $f\omega$ would have residue $1$ at $o$ and zero elsewhere by [F3], contradicting [F7]. This directly proves nonsolvability without a good-cover hypothesis. [F3, F5, F6, F7, step 1.1, algebra]

3.1 Choose $0<r<\delta/4$ using [F2]. The quotient images of radius-$r$ plane balls cover $X$ and are disc chart domains; compactness gives a finite subcover. In the lift of any one member, another member that intersects it has at most one relevant translated radius-$r$ ball: two such centres would be within $4r<\delta$ of each other, contrary to [F2]. Thus every nonempty finite intersection lifts injectively to an intersection of finitely many plane balls. It is bounded, open and convex; straight-line contraction to an interior point makes it contractible, and [F8] makes it disc-biholomorphic. This is a finite good cover. Supply compatible metrics by [F9] and the comparison data of [F10]. By [F3], pairing the data with $c\,dz$ gives $\operatorname{Res}_o(c\,dz/z)=c$, since all other terms vanish; replacing the representative $1/z$ by a holomorphic perturbation leaves this residue unchanged. Step 1.1 identifies the entire differential space, so this is the complete residue functional, and [F10] is the exact necessary-and-sufficient obstruction criterion. Its value $1$ at $dz$ proves the claimed failure. [F2, F3, F8, F9, F10, step 1.1, choose, construct, algebra] ∎
''')

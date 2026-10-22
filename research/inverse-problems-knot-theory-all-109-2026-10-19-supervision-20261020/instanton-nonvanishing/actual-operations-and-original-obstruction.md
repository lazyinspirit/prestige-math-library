# Sutured instanton nonvanishing: actual operations and original obstruction

This is an author-stage mathematical donor, not a proof acceptance or a replacement for any original item. No canonical item is changed. Inherited escalation history records one review/repair cycle in `owner-instanton-foundations-round1/report.json`; the counter is not reset. There has been no fresh independent review of this donor.

The original `thm-sutured-instanton-khi-rank-detects-unknot` still owes closure independence, the product top eigenspace, excision, decomposition, a taut hierarchy and top/bottom genus nonvanishing, and the singular-to-closure excision bridge. Its accepted singular analytic supplier constructs its source complex; it proves none of these additional operations. The numerator-one Property P supplier additionally needs either the ordinary surgery triangle with the appropriate closed nonvanishing theorem, or the full holonomy deformation/Donaldson nonvanishing argument. Neither follows from the singular cube.

## A local holonomy shear, with its exact normalization

Take coordinates $t\in[0,1]$ and $x,y\in\mathbb R/\mathbb Z$ on a thickened torus. Put $H=\operatorname{diag}(i,-i)$ and use the convention that the holonomy of the connection $H(a\,dx+b\,dy)$ around the two coordinate circles is $\exp(aH),\exp(bH)$. Choose a smooth function $h$ supported in $(0,1)$ with integral one, and a smooth even $2\pi$-periodic function $g$. In this explicitly diagonal sector impose

$$F_A=H g'(b)h(t)\,dt\wedge dx.$$

For $A=H(a(t)\,dx+b(t)\,dy)$ its curvature is

$$F_A=H(a'(t)\,dt\wedge dx+b'(t)\,dt\wedge dy).$$

Consequently every solution in this sector has $b(t)=b_0$ and

$$a(t)=a_0+g'(b_0)\int_0^t h(u)\,du.$$

Conversely these formulas give a smooth solution for every $(a_0,b_0)$. Thus the two boundary restriction maps are related by the actual shear

$$S_g(a,b)=(a+g'(b),b).$$

This is well defined on the angle torus: periodicity of $g'$ deals with $b\mapsto b+2\pi$ and the formula respects $a\mapsto a+2\pi$. Since $g'$ is odd, it commutes with simultaneous inversion $(a,b)\mapsto(-a,-b)$ and descends to the pillowcase. Its Jacobian is $\left(\begin{smallmatrix}1&g''(b)\\0&1\end{smallmatrix}\right)$, so $S_g^*(da\wedge db)=da\wedge db$. Even periodicity gives $g'(0)=g'(\pi)=0$, so all four orbifold points are fixed. Replacing $g$ by $sg$ gives the complete area-preserving isotopy for $0\le s\le1$. Integral changes of basis $B\in SL(2,\mathbb Z)$ give the conjugate shear $B S_g B^{-1}$; consecutive disjoint collars implement the ordered composition, because the outgoing boundary angles of one collar are the incoming angles of the next.

The factor multiplying the holonomy class function must be chosen so that its gradient gives exactly the displayed curvature equation; it depends on the invariant inner product and Chern–Simons normalization. This calculation fixes a convention rather than importing a sign or a $2\pi$ factor from another convention.

This proves an explicit sector of the collar equation. It does **not** assert that all perturbed connections are gauge equivalent to these diagonal solutions, identify their linearized deformation complex, or prove a continuation theorem for arbitrary large perturbations. Those are necessary separate assertions in the actual Sivek–Zentner argument, not consequences of the displayed ODE.

## The admissible torus critical locus: an exact elementary calculation

Use the projective representation model with lifts $U,V,W\in SU(2)$ satisfying

$$UV=-VU,\qquad UW=WU,\qquad VW=WV.$$

These are the relations for the obstruction class with value one on the $xy$-torus and zero on the other coordinate tori, with the lifts retained rather than quotienting by arbitrary $SO(3)$ gauge transformations. Simultaneous $SU(2)$ conjugacy is the equivalence in this paragraph.

Write unit quaternions as $U=a+u$ and $V=b+v$, with $a,b\in\mathbb R$ and $u,v\in\mathbb R^3$. Conjugating $U$ to $-U$ by $V$ preserves its real part, so $a=0$; similarly $b=0$. The anticommutation equation now says $u\cdot v=0$. Both vectors have length one. An oriented orthonormal completion of $(u,v)$ is carried to $(i,j,k)$ by an element of $SO(3)$, and every such rotation is quaternion conjugation. Therefore $(U,V)$ is simultaneously conjugate to $(i,j)$. A quaternion commuting with both $i$ and $j$ is real; hence $W=1$ or $W=-1$. These two triples are not simultaneously conjugate because conjugation fixes each real quaternion. Thus the retained-lift model has exactly two classes, represented by $(i,j,1)$ and $(i,j,-1)$.

Their adjoint local systems are acyclic over $\mathbb Q$ or $\mathbb R$. In the basis $(i,j,k)$ the three real lines have coordinate-circle monodromies respectively $(1,-1,1)$, $(-1,1,1)$ and $(-1,-1,1)$. For a rank-one local system with commuting scalar monodromies $r_x,r_y,r_z$, the cellular cochains of the product cell structure of $T^3$ form the Koszul complex with differential

$$d=(r_x-1)e_x\wedge +(r_y-1)e_y\wedge +(r_z-1)e_z\wedge.$$

At least one scalar $r_j-1$ is $-2$ on each of our three lines. Contraction by $e_j$, divided by $r_j-1$, is a homotopy $s$ satisfying $ds+sd=1$: wedge and contraction anticommute in unequal coordinates and have anticommutator one in coordinate $j$. Each line complex is therefore contractible, and their direct sum has zero cohomology in every degree. In particular $H^0=H^1=0$: there is no infinitesimal stabilizer or infinitesimal flat deformation at either class.

This calculation does not identify two retained-lift classes with two ordinary $SO(3)$ conjugacy classes. Their adjoint holonomies are identical. Dividing by additional gauge components can identify them, which is exactly why the determinant-one gauge convention must remain explicit. It also does not prove the relative grading, vanishing of the Floer differential, or the point-operator calculation $\mu(\mathrm{pt})=\pm2$. Two nondegenerate critical points alone do not imply a nonzero Floer homology group: a two-generator complex can be acyclic.

## The punctured-torus closure sector and its boundary double cover

There is a related explicit calculation for the closure piece $F\times S^1$, where $F$ is a once-punctured torus. Fix free generators $a,b$ of $\pi_1(F)$ with $\partial F=[a,b]$, and write $z$ for the circle factor. Take the projective obstruction that anticommutes the lifts of $a,z$ and commutes those of $b,z$. The retained lifts therefore satisfy precisely

$$UZ=-ZU,\qquad BZ=ZB.$$

There is no relation between $U$ and $B$: the punctured-torus group is free. The quaternion argument above puts $(U,Z)=(i,j)$, uniquely up to its common centralizer $\{1,-1\}$. The second relation then gives $B=\exp(\theta j)$ for a unique $\theta\in\mathbb R/2\pi\mathbb Z$. No residual conjugation changes $\theta$. Consequently the complete quotient of this projective tuple model is a circle, not just a family of exhibited solutions. Its boundary lifts are

$$z\longmapsto j,\qquad [a,b]\longmapsto i\exp(\theta j)i^{-1}\exp(-\theta j)=\exp(-2\theta j).$$

The boundary restriction is the degree-minus-two circle map $\theta\mapsto-2\theta$. Reversing the chosen boundary longitude reverses this sign; it does not change its degree magnitude or covering property. In particular every prescribed boundary longitude commuting with $j$ has exactly two extensions in this marked tuple model. The two square roots vary as an honest double covering, and do not require choosing a global continuous square root.

For completeness the same normal form controls infinitesimal deformations, not only points. The solution space of the anticommutation equation for $(U,Z)$ is the smooth space of ordered perpendicular unit vectors in $\mathbb R^3$, hence $SO(3)$. The fiber of possible $B$ is the circle centralizing $Z$; after using the unique ordered-frame rotation to normalize $(U,Z)$, this is the product $SO(3)\times S^1$. Conjugation removes the first factor with discrete stabilizer. Thus the quotient is smoothly one-dimensional with no additional infinitesimal directions, and the differential of boundary restriction is $d\theta\mapsto-2\,d\theta$ on the longitude coordinate. The infinitesimal stabilizer is zero. This supplies the one-dimensional closure-piece deformation and the nonzero boundary derivative used in the Mayer–Vietoris test of Sivek–Zentner Theorem 4.8.

Gluing to a knot exterior identifies its meridian with $z$ and its longitude with $[a,b]$. In this explicit projective gluing model, fixing $(U,Z)=(i,j)$ leaves an actual exterior homomorphism $\rho$ with $\rho(\mu)=j$, rather than a conjugacy class of such homomorphisms. Its longitude commutes with $j$ and must satisfy $\rho(\lambda)=\exp(-2\theta j)$. The glued tuple space is therefore exactly the pullback

$$\{(\rho,\theta):\rho(\mu)=j,\ \rho(\lambda)=\exp(-2\theta j)\}.$$

It is a double cover of $R(K,j)=\{\rho:\rho(\mu)=j\}$, because it is the pullback of the just-proved circle covering. The distinction between this marked homomorphism space and its further circle-conjugation quotient is essential. It accounts for the circles associated with nonabelian exterior representations and the two points associated with the abelian one. This is a proof in the stated tuple/gluing model; identifying that model with a fixed-determinant connection configuration space still requires the actual bundle and determinant-gauge gluing construction. It proves no Floer rank lower bound.

## Exact remaining nonvanishing operation

For a product closure the needed seed is the actual top simultaneous eigenspace calculation

$$I(S^1\times\Sigma\mid\Sigma)_w\cong\mathbb Q,$$

with the specified odd determinant and the actual surface/point operators. For a torus this includes proving the $+2$ point eigenspace has dimension one, not merely counting the two flat lifts above. The source `Knots, sutures and excision`, §§7.1–7.5, imports the product operator calculation from Muñoz, proves excision using cobordism maps, and transfers the decomposition proof from its monopole §§6.3/6.5. These are distinct genuine missing local mathematical operations. There is no proved local taut-instanton hierarchy or Muñoz/operator supplier in the inspected current instanton inventory. They cannot be inserted as Facts with a citation and then counted as discharged.

After the seed, genuine cut-and-reglue maps and their inverse compositions must be constructed, including bundle identifications and operator intertwining. The decomposition theorem must place the cut-open group in a direct summand with the correct extremal eigenvalue. A finite taut hierarchy ending in product pieces then gives nonvanishing by composing actual inclusions; an asserted hierarchy without its existence proof is another gap. The genus-$g$ cut of a minimal Seifert surface then supplies a nonzero $+g$ summand; its opposite supplies a distinct $-g$ summand when $g>0$. That yields the rank obstruction needed by the detector only after closure independence and these identifications are supplied. The singular-to-closure bridge remains an additional operation, even after rank detection for the closure is proved.

## The precise surgery and SU2-averse interfaces

The accepted representation geometry needs just one continuous irreducible peripheral path with unequal meridian angles for every nontrivial SU2-averse knot. It does not need the stronger endpoint prescription at $\pi/2$. The full Sivek–Zentner Theorem 4.1 is a sufficient route: its vertical alternative forbids every finite SU2-abelian slope, and its other alternative supplies the path. An isolated traceless irreducible representation proves neither assertion.

The actual proof of their Theorem 4.8 first realizes an avoiding pillowcase curve by collar shears, proves that its $2n$ actual critical points are irreducible and nondegenerate by the perturbed Mayer–Vietoris complex, constructs Floer homology for these large perturbations and proves continuation to the unperturbed group, and uses the point eigenspace splitting to infer $\dim KHI\le n$. For $n=1$ the KHI rank detector gives the contradiction. The local shear ODE above supplies only its explicit diagonal holonomy change. Frozen singular trajectory continuation is not, at its accepted scope, the required closed determinant-one large-perturbation continuation or the point eigenspace splitting.

Neither this interface nor closure rank detection supplies the remaining instanton L-space conclusions: existence of L-space surgery for the knot or its mirror, surgery range and $|r|>2$, fiberedness, and alternating unit/adjacent highest Alexander coefficients. Those uses remain held in the Baldwin–Sivek package. Likewise zero-surgery nonvanishing plus the $+1$ surgery triangle cannot simply be cited as a proof of every numerator-one $\pm1/q$ filling without the actual additional surgery argument.

## Reading and reuse record

Actual complete current bodies read: `thm-sutured-instanton-khi-rank-detects-unknot`, `lem-property-p-instanton-surgery-triangle-and-rank-input`, `def-instanton-surgery-triangle-data`, both singular/KHI definitions, and the current Baldwin–Sivek input package. Actual source passages read: `sources/sutured.txt` lines 2050–2695 (printed §§7.1–7.8, including full displayed excision/decomposition/nonvanishing arguments); cached authentic `1710.01957v2` extracted §§4.1–4.4 and Theorem 4.8/proof, the first part of the closing proof of Theorem 4.1. No whole-paper reading of those two papers is claimed. At the initial donor stage Muñoz's proof had not been read; the subsequent constructive continuation read the entire actual fourteen-page `dg-ga/9710029v1` text and authored the finite extremal calculation in `product-closure-extremal-operation.md`. Its geometric imports remain explicitly unproved locally. Existing accepted ordinary/singular analytic, longitudinal and representation bundles are reused only at their recorded scopes; their bodies have not been re-reviewed here.

The original Statements/Definitions are untouched. Therefore this donor triggers no changed-interface consumer repair or new acceptance. KHI detection, Property P and the full Baldwin–Sivek instanton package remain unproved locally. This report is an exact obstruction and explicit collar/closure computations, not a closure receipt or an additional review cycle.

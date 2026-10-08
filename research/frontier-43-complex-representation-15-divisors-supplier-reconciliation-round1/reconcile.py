from pathlib import Path
import re

def facts(id,values):
 p=Path('items/'+id+'.md');t=p.read_text()
 for label,value in values.items():
  pattern=r'^\['+label+r'\] [\s\S]*?(?=\n\n|\Z)'
  t,n=re.subn(pattern,lambda m:'['+label+'] '+value,t,count=1,flags=re.M);assert n,(id,label)
 p.write_text(t)
p=Path('items/thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces.md');t=p.read_text()
old='Let $\\mathfrak U$ be a supplied finite good cover of $X$ such that each member\nlies in a holomorphic trivializing domain for $E$\n([[def-cech-cohomology-holomorphic-line-bundle-sections]]). Then the sheaf\nsequence';assert old in t;t=t.replace(old,'Then the sheaf sequence')
t=t.replace('For every $p\\ge0$, the canonical Leray comparison map is an isomorphism','For the fixed-cover comparison, additionally let $\\mathfrak U$ be a supplied\nfinite good cover of $X$ subordinate to holomorphic frame domains for $E$\n([[def-cech-cohomology-holomorphic-line-bundle-sections]]). For every\n$p\\ge0$, its canonical Leray comparison map is an isomorphism')
t=t.replace('$E$ with supplied compatible metrics, and a finite good cover subordinate to\na holomorphic trivializing cover of $E$.','$E$ with supplied compatible metrics. For the fixed-cover Leray claim,\nadditionally supply a finite good cover subordinate to holomorphic frame\ndomains of $E$.')
p.write_text(t)
facts('lem-structure-sheaf-euler-characteristic-is-one-minus-genus',{
'F12':r'A holomorphic atlas gives the underlying smooth surface, and $K=\Lambda^{1,0}T^*X$ is its canonical holomorphic line bundle. Compatible metrics on $X$ and on each holomorphic line bundle exist by averaging smooth real metrics with the complex structures; this existence uses $\mathrm{AC}_\omega$, supplied by full AC ([[def-riemann-surface-and-holomorphic-atlas]], [[cor-holomorphic-functions-are-real-analytic-and-smooth]], [[def-smooth-manifold]], [[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]], [[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).',
'F13':r'The global holomorphic sections and degree-one sheaf cohomology of $\mathcal O_X(D)$ are finite-dimensional, and $\chi(\mathcal O_X(D))=\ell(D)-i(D)$ ([[thm-finiteness-cohomology-compact-riemann-surface]]).',
'F14':r'The global Dolbeault resolution identifies sheaf cohomology with smooth Dolbeault cohomology in degrees $0,1$ and gives $H^q(X,\mathcal O_X(E))=0$ for $q\ge2$, without a finite-cover hypothesis ([[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]).',
'F15':r'For a holomorphic Hermitian line bundle $G$ on compact $X$, the Dolbeault groups are finite-dimensional with unique harmonic representatives, and the perfect complex-bilinear Hodge pairing gives $H^{0,1}(X,G)^*\cong H^0(X,K\otimes G^*)$. In particular, for $G=\mathcal O_X$ and $G=K$, their dual holomorphic spaces are $H^0(X,K)$ and $H^0(X,\mathcal O_X)$ respectively ([[cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional]], [[thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology]]).',
'F16':r'The zero-divisor bundle is canonically trivial, identifying $\mathcal O_X(0)$ with the structure sheaf $\mathcal O_X$ ([[def-divisor-principal-and-canonical-divisor-riemann-surface]], [[def-line-bundle-associated-to-a-divisor]]).',
})
p=Path('items/lem-structure-sheaf-euler-characteristic-is-one-minus-genus.md');t=p.read_text();t=t.replace('Provisionally using the two unfinished Hodge suppliers in [F15],','With the supplied compatible metrics in [F12], apply [F15] to the trivial bundle and $K$;').replace('The conclusion remains conditional pending reconciliation of the upstream supplier obligations recorded above. ','');p.write_text(t)
p=Path('items/thm-residue-pairing-for-line-bundle-cohomology.md');t=p.read_text();old='Fix compatible metrics on $X$ and $E$ as required by the comparison theorem, and a supplied finite good cover $\\mathfrak U$ subordinate to holomorphic frame domains of $E$';new='Fix compatible metrics on $X$ and $E$ as required by the global Dolbeault comparison theorem';assert old in t;t=t.replace(old,new)
t=t.replace('3. Let $s_D$ be the canonical meromorphic section','3. Additionally supply a finite good cover $\\mathfrak U$ subordinate to holomorphic frame domains of $E$. Let $s_D$ be the canonical meromorphic section')
t=t.replace('a supplied finite good cover $\\mathfrak U$ subordinate to holomorphic frame domains of $E$, $\\xi\\in','$\\xi\\in').replace('and $\\omega\\in H^0(X,K\\otimes E^*)$.','and $\\omega\\in H^0(X,K\\otimes E^*)$. For statement 3, additionally supply a finite good cover $\\mathfrak U$ subordinate to holomorphic frame domains of $E$.',1)
t=re.sub(r'^\[F15\].*\n\n','',t,flags=re.M)
t=t.replace('By [F2], the supplied cover identifies the fixed-cover Čech and sheaf cohomology groups and identifies $H^1(X,\\mathcal O_X(D))$','By the global comparison in [F2], $H^1(X,\\mathcal O_X(D))$ is canonically identified')
t=t.replace('The comparison in [F2] is canonical and compatible with refinement, so the same form is independent of the supplied cover and local frames.','The global comparison in [F2] is canonical and evaluation is frame-independent. If a fixed-cover class is used, its refinement-compatible comparison gives the same sheaf class, so the pairing is independent of that supplied cover as well.')
p.write_text(t)
facts('thm-residue-pairing-for-line-bundle-cohomology',{
'F2':r'The global Dolbeault comparison identifies $H^0(X,\mathcal O_X(E))$ with the holomorphic-section space and $H^1(X,\mathcal O_X(E))$ with the smooth Dolbeault quotient, naturally in bundle maps, without a finite-cover hypothesis. For any supplied frame-subordinate finite good cover, its canonical fixed-cover Čech comparison is refinement-compatible ([[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]).',
'F3':r'The spaces $H^0(X,\mathcal O_X(D))$ and $H^1(X,\mathcal O_X(D))$ are finite-dimensional, and $\chi(\mathcal O_X(D))=\ell(D)-i(D)$ ([[thm-finiteness-cohomology-compact-riemann-surface]]).',
'F4':r'For an ordered cover, the Čech coboundary is $(\delta^0a)_{ij}=a_j-a_i$ for $i<j$; on a supplied finite good cover the fixed-cover cohomology is cocycles modulo coboundaries ([[def-cech-cochain-complex-open-cover]], [[def-cech-cohomology-holomorphic-line-bundle-sections]]).',
'F5':r'The divisor bundle has a canonical meromorphic section $s_D$ with divisor $D$; its holomorphic section sheaf consists of the sections $h s_D$ with $(h)+D\ge0$ ([[def-line-bundle-associated-to-a-divisor]]).',
'F6':r'The canonical bundle is $K=\Lambda^{1,0}T^*X$; holomorphic sections of a line bundle and its dual have holomorphic coefficients in holomorphic frames ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).',
'F9':r'Compatible Riemannian and Hermitian metrics exist under $\mathrm{AC}_\omega$. The metrics here are supplied to instantiate the global comparison theorem ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).',
})
facts('thm-nondegeneracy-of-the-residue-pairing',{
'F1':r'The intrinsic residue pairing is well defined and complex-bilinear, with $B_D(\xi,\omega)=(2\pi i)^{-1}\int_X\theta\wedge\omega$ for a smooth Dolbeault representative $\theta$ of $\xi$ ([[thm-residue-pairing-for-line-bundle-cohomology]]).',
'F2':r'The canonical global comparison identifies $H^1(X,\mathcal O_X(D))$ with the smooth Dolbeault quotient $H^{0,1}(X,E)$, naturally in the bundle and without a finite-cover hypothesis ([[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]).',
'F3':r'The space $H^1(X,\mathcal O_X(D))$ is finite-dimensional ([[thm-finiteness-cohomology-compact-riemann-surface]]).',
'F4':r'The divisor construction gives $E^*\cong\mathcal O_X(-D)$, so $F=K\otimes E^*$ is the canonical twist denoted by $K-D$ ([[def-line-bundle-associated-to-a-divisor]]).',
'F5':r'The supplied metrics define the conjugate-linear bundle map $\#=\star_E$ and the positive identity $u\wedge\#u=|u|^2\,dV_g$ ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).',
'F6':r'The maximal Dolbeault operator defines the Hilbert harmonic space $\mathcal H^{0,1}(X,E)=\ker\bar D^*$ and the Dolbeault Laplacian, with their stated domains ([[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]).',
'F7':r'For the supplied metrics, $\#$ is a conjugate-linear isomorphism from $\mathcal H^{0,1}(X,E)$ onto $H^0(X,F)$ for $F=K\otimes E^*$, and $u\wedge\#u=|u|^2\,dV_g$ ([[thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology]]).',
'F8':r'The Dolbeault group $H^{0,1}(X,E)$ is finite-dimensional and every class has a unique smooth harmonic representative. Together with [F7], this also makes $H^0(X,F)$ finite-dimensional ([[cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional]]).',
})
p=Path('items/thm-nondegeneracy-of-the-residue-pairing.md');t=p.read_text().replace('and the finite good cover and residue pairing of the preceding item.','and the intrinsic residue pairing of the preceding item.').replace('These Hodge uses are provisional until the missing Hodge suppliers and their proofs are reconciled. ','').replace('input provisionally.','input.');p.write_text(t)
facts('thm-serre-duality-compact-riemann-surfaces',{
'F1':r'The nondegeneracy theorem proves the intrinsic canonical pairing $B_D$ is perfect, with twist $K_X\otimes E^*$; both induced complex-linear maps are isomorphisms ([[thm-nondegeneracy-of-the-residue-pairing]]).',
'F2':r'The residue-pairing theorem gives $B_D(\xi,\omega)=(2\pi i)^{-1}\int_X\theta\wedge\omega$ for any smooth Dolbeault representative $\theta$ of $\xi$ ([[thm-residue-pairing-for-line-bundle-cohomology]]).',
'F3':r'The divisor construction gives $E^*\cong\mathcal O_X(-D)$ and, for a nonzero meromorphic differential $\eta$ with $K_\eta=(\eta)$, gives $\mathcal O_X(K_\eta)\cong K_X$ by $h\mapsto h\eta$. Hence $H^0(X,F_D)\cong L(K_\eta-D)$. Negative-degree divisors have zero $L$-space, and the dual in $F_D$ is the fibrewise complex-linear dual ([[def-meromorphic-differential-on-a-riemann-surface]], [[def-line-bundle-associated-to-a-divisor]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]], [[def-dual-and-hom-vector-bundles]]).',
'F4':r'The degree-one divisor cohomology is finite-dimensional with notation $i(D)=\dim H^1(X,\mathcal O_X(D))$ ([[thm-finiteness-cohomology-compact-riemann-surface]]).',
'F5':r'For any Hermitian holomorphic line bundle $G$ with supplied compatible metrics, the bundle Hodge star maps $\mathcal H^{0,1}(X,G)$ conjugate-linearly onto $H^0(X,K_X\otimes G^*)$, and its integral pairing gives perfect complex-bilinear Dolbeault duality ([[thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology]]).',
'F6':r'Dolbeault cohomology of such $G$ is finite-dimensional and each degree-one class has a unique smooth harmonic representative ([[cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional]]).',
'F7':r'The canonical global comparison identifies $H^1(X,\mathcal O_X(G))$ with smooth Dolbeault cohomology naturally in bundle maps, without requiring a finite good cover ([[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]).',
})
p=Path('items/thm-serre-duality-compact-riemann-surfaces.md');t=p.read_text().replace('Choose the compatible metrics and comparison data needed to apply the preceding Hodge and Čech–Dolbeault results.','Choose compatible metrics as supplied by the preceding metric result, and use the canonical global Dolbeault comparison when applying Hodge duality.');p.write_text(t)
facts('cor-prescribed-principal-parts-compact-riemann-surface',{
'F2':r'For the supplied finite good cover, $\check H^1(\mathfrak U,\mathcal O_X)$ is cocycles modulo coboundaries, with $\delta^0(a)_{ij}=a_j-a_i$ for $i<j$ ([[def-cech-cohomology-holomorphic-line-bundle-sections]], [[def-cech-cochain-complex-open-cover]]).',
'F3':r'The canonical Leray comparison identifies fixed-cover Čech $H^1$ with sheaf $H^1(X,\mathcal O_X)$ and is natural in refinements ([[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]).',
'F5':r'The residue formula applies to cocycles $c_{ij}=g_{ij}s_D$ with $g_{ij}=\eta_j-\eta_i$. At $D=0$ and $s_0=1$, it expresses $B_0$ as the sum of residues of the products of local meromorphic lifts with the holomorphic differential ([[thm-residue-pairing-for-line-bundle-cohomology]]).',
'F6':r'The intrinsic pairing $H^1(X,\mathcal O_X)\times H^0(X,K_X)\to\mathbb C$ is perfect; in particular its map $H^1(X,\mathcal O_X)\to H^0(X,K_X)^*$ is injective ([[thm-serre-duality-compact-riemann-surfaces]]).',
'F7':r'The zero-divisor bundle is trivial, $\mathcal O_X(0)\cong X\times\mathbb C$, with canonical section $s_0=1$ ([[def-line-bundle-associated-to-a-divisor]]).',
})

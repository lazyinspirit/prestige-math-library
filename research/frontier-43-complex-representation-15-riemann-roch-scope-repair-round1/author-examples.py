from pathlib import Path
import json
manifest=json.load(open('research/frontier-43-complex-representation-15-batch-10.pages.json'))
rows={x['id']:x for p in manifest for x in p['items']}
def write(id,deps,body):
 row=rows[id];src=row['sources'];header='---\nid: '+id+'\nkind: example\ntitle: '+json.dumps(row['title'])+'\nstatus: draft\norigin: pipeline\npipeline_run: frontier-43-complex-representation-15\nproof_strategy: direct\nprovenance:\n  statement: literature-derived\n  proof: ai-altered\ndependency_level: 14\ndeps:\n'+''.join('  - '+d+'\n' for d in deps)+'aliases: []\nlandmark: false\nverification:\n  precheck: pending\nsources:\n  references: '+json.dumps(src['references'],ensure_ascii=False)+'\n---\n\n'
 Path('items/'+id+'.md').write_text(header+body)
write('ex-divisors-and-riemann-roch-on-the-riemann-sphere-and-the-torus',[
'def-axiom-of-choice','def-divisor-principal-and-canonical-divisor-riemann-surface','def-line-bundle-associated-to-a-divisor','def-riemann-sphere-holomorphic-charts','thm-meromorphic-functions-riemann-sphere-are-rational','thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity','def-meromorphic-differential-on-a-riemann-surface','def-complex-lattice-and-complex-torus','thm-complex-torus-quotient-is-well-defined','def-elliptic-function-for-a-lattice','thm-weierstrass-p-normal-convergence-and-periodicity','def-genus-and-euler-characteristic-compact-riemann-surface','thm-riemann-roch-compact-riemann-surfaces','thm-serre-duality-compact-riemann-surfaces'],r'''## Example

Assume full AC ([[def-axiom-of-choice]]).

1. On the Riemann sphere $X=\widehat{\mathbb C}$ with affine coordinate $z$, write $D=\sum_{j=1}^k m_j[a_j]+m_\infty[\infty]$ with distinct finite points $a_j$, and put $s=\deg D$ and $u(z)=\prod_{j=1}^k(z-a_j)^{-m_j}$ (the empty product is $1$). Then $(u)=-D+s[\infty]$ and
$$\ell(D)=\max(0,s+1).$$
When $s\ge0$, a basis of $L(D)$ is $u,uz,\ldots,uz^s$, with
$$(uz^j)+D=j[0]+(s-j)[\infty].$$
The meromorphic differential $dz$ has canonical divisor $K=-2[\infty]$. It is not a nonzero global holomorphic differential: $H^0(X,K_X)\cong H^0(X,\mathcal O_X(K))=0$. Moreover
$$\ell(K-D)=\max(0,-s-1),\qquad \ell(D)-\ell(K-D)=s+1,$$
and $i(D)=\ell(K-D)$, so the negative-degree and special-divisor cases are included ([[thm-riemann-roch-compact-riemann-surfaces]], [[thm-serre-duality-compact-riemann-surfaces]]).

2. Let $\Lambda$ be a full complex lattice and $T_\Lambda=\mathbb C/\Lambda$ its compact Riemann surface. The differential $dz$ descends to a nowhere-vanishing holomorphic differential, so one may take $K=0$; the genus is $1$ and $\ell(K)=1$. At the origin $o=[0]$, for every integer $n\ge1$,
$$\ell(n[o])=n,\qquad L(0)=\mathbb C.$$
Let $\wp$ and $\wp'$ denote the descended Weierstrass functions. A basis of $L(n[o])$ consists of $1$ and one function $\wp^j(\wp')^\varepsilon$ for each pole order $m=2,3,\ldots,n$: for even $m$ take $(j,\varepsilon)=(m/2,0)$, and for odd $m\ge3$ take $((m-3)/2,1)$. Thus the basis begins $1,\wp,\wp',\wp^2,\wp\wp',\wp^3,\ldots$ with orders $0,2,3,4,5,6,\ldots$. In particular $L([o])=\mathbb C$, while $L(2[o])=\langle1,\wp\rangle$; order $1$ is the first gap, and $\wp$ is the first nonconstant function in this filtration.

## Facts & Assumptions

**Given:** Full AC, the sphere divisor $D$ with degree $s$, and a full lattice $\Lambda$ with torus origin $o$.

[F1] Full AC is the hypothesis of the cohomology and Riemann–Roch results ([[def-axiom-of-choice]]).

[F2] Divisor orders add under multiplication, principal divisors have degree zero, $L(A)=0$ for negative-degree $A$, and linear equivalence identifies the corresponding spaces $L(A)$ ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F3] The sphere coordinates are $z$ and $w=1/z$; rational functions are exactly its meromorphic functions ([[def-riemann-sphere-holomorphic-charts]], [[thm-meromorphic-functions-riemann-sphere-are-rational]]).

[F4] Every nonconstant complex polynomial has a root, and a degree-$d$ polynomial has $d$ roots counted with multiplicity ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]).

[F5] A meromorphic differential is locally $h(z)\,dz$ with the differential transition law; its order is the Laurent order of $h$ ([[def-meromorphic-differential-on-a-riemann-surface]]).

[F6] The divisor bundle identifies its holomorphic sections with $L(A)$, and $\mathcal O_X((\eta))\cong K_X$ for a nonzero meromorphic differential $\eta$ ([[def-line-bundle-associated-to-a-divisor]]).

[F7] Riemann–Roch gives $\ell(A)-i(A)=\deg A+1-g$, $\ell(0)=1$, and $i(0)=g$; Serre duality identifies $i(A)=\ell(K-A)$ for a canonical divisor $K$ ([[thm-riemann-roch-compact-riemann-surfaces]], [[thm-serre-duality-compact-riemann-surfaces]]).

[F8] The quotient torus has a holomorphic atlas from the inverse local restrictions of its projection; its chart transitions are translations, and it is compact ([[def-complex-lattice-and-complex-torus]], [[thm-complex-torus-quotient-is-well-defined]]).

[F9] Elliptic functions descend to meromorphic functions on the torus. The Weierstrass function has double poles precisely at lattice points, with principal part $z^{-2}$ at zero, while its derivative is elliptic with principal part $-2z^{-3}$ there and no other poles modulo the lattice ([[def-elliptic-function-for-a-lattice]], [[thm-weierstrass-p-normal-convergence-and-periodicity]]).

[F10] The sphere has genus zero; the genus is a topological invariant ([[def-genus-and-euler-characteristic-compact-riemann-surface]]).

## Verification

1.1 Each factor $z-a_j$ has divisor $[a_j]-[\infty]$ by the coordinates in [F3], so [F2] gives $(u)=-D+s[\infty]$. For any nonzero $f$, $(f/u)+s[\infty]=(f)+D$, so division by $u$ identifies $L(D)$ with $L(s[\infty])$. A rational function with no finite poles is a polynomial: in a reduced quotient of polynomials, a nonconstant denominator would have a finite root by [F4], hence a pole, contrary to the divisor bound. A polynomial of degree $d$ has pole order $d$ at infinity in the coordinate $w=1/z$, so for $s\ge0$ this space consists precisely of the polynomials of degree at most $s$. Its basis $1,z,\ldots,z^s$ yields the displayed basis of $L(D)$ and its divisor formula. If $s<0$, [F2] gives $L(D)=0$. [F2, F3, F4, given, algebra]

2.1 On the finite chart $dz$ has no zeros or poles; at infinity $dz=-w^{-2}dw$, so [F5] gives $(dz)=-2[\infty]=K$. Step 1.1 applied to $K$ gives $\ell(K)=0$, and [F6] identifies this zero space with the holomorphic differentials. Applied to $K-D$, the same calculation gives $\ell(K-D)=\max(0,-s-1)$. If $s\ge-1$, subtracting it from $\ell(D)$ gives $s+1$; if $s\le-2$, the difference is $0-(-s-1)=s+1$. This is Riemann–Roch for the genus-zero sphere, and [F7] identifies the second term with $i(D)$. [F5, F6, F7, F10, step 1.1, algebra]

3.1 By [F8], different local lifts of a torus point differ by a lattice translation, whose derivative is $1$, so their differentials $dz$ agree; by [F5] they define a nowhere-vanishing holomorphic differential with divisor $0$. Thus [F6] identifies the canonical bundle with $\mathcal O_X(0)$. By [F7], $\ell(0)=1$ and $i(0)=\ell(K)=1$; applying Riemann–Roch at $0$ gives $0=1-g$, hence $g=1$. For $n\ge1$, the divisor $K-n[o]=-n[o]$ has negative degree, so [F2] gives $\ell(K-n[o])=0$. Riemann–Roch and duality [F7] now give $\ell(n[o])=n$ and $L(0)=\mathbb C$. [F1, F2, F5, F6, F7, F8, given, algebra]

4.1 By [F9], $\wp^j(\wp')^\varepsilon$ descends to the torus, has no poles away from $o$, and has pole order exactly $2j+3\varepsilon$ at $o$, with nonzero leading coefficient $(-2)^\varepsilon$. The chosen representatives have distinct orders $2,3,\ldots,n$, so each belongs to $L(n[o])$; together with $1$ they are linearly independent, because in a nontrivial linear combination the term of largest pole order has a principal coefficient that no other term can cancel. There are $n$ such functions for $n\ge1$ (only $1$ when $n=1$), so step 3.1 makes them a basis. This proves the gap and the first nonconstant-function claims. [F9, step 3.1, algebra] ∎
''')
write('ex-low-degree-riemann-roch-computations',[
'def-axiom-of-choice','def-divisor-principal-and-canonical-divisor-riemann-surface','def-genus-and-euler-characteristic-compact-riemann-surface','def-holomorphic-and-meromorphic-map-of-riemann-surfaces','def-line-bundle-associated-to-a-divisor','thm-proper-holomorphic-map-riemann-surfaces-has-degree','thm-local-normal-form-holomorphic-map-riemann-surfaces','lem-point-divisor-exact-sequence-and-euler-characteristic-step','thm-riemann-roch-compact-riemann-surfaces','thm-serre-duality-compact-riemann-surfaces'],r'''## Example

Assume full AC ([[def-axiom-of-choice]]), and let $X$ be a compact Riemann surface of genus $g$, $D$ any divisor, and $K$ a canonical divisor. Such $K$ exists by [[thm-riemann-roch-compact-riemann-surfaces]]. Here, for $g\ge2$, **hyperelliptic** means that $X$ admits a degree-two holomorphic map to the Riemann sphere.

1. If $\deg D<0$, then $\ell(D)=0$ and $\chi(\mathcal O_X(D))=-\ell(K-D)$.
2. If $\deg D=0$, then $\ell(D)=1$ exactly when $D\sim0$; otherwise $\ell(D)=0$. In particular $\ell(D)\le1$.
3. If $\deg D=1$ and $g\ge1$, then $\ell(D)\le1$, with equality exactly when $D$ is linearly equivalent to a point divisor $[p]$. For an effective degree-one divisor $D=[p]$, $L(D)=\mathbb C$. For arbitrary degree-one $D$, a nonzero $L(D)$ need not be spanned by the constant function.
4. If $\deg D=2$ and $g\ge2$, then $\ell(D)\le2$. When $\ell(D)=2$, any two independent sections define a degree-two map by their ratio, and $X$ is hyperelliptic. If $X$ is not hyperelliptic, then every degree-two divisor has $\ell(D)\le1$.
5. If $\deg D>2g-2$, then $i(D)=0$ and $\ell(D)=\deg D+1-g$.

## Facts & Assumptions

**Given:** Full AC, a compact Riemann surface $X$ of genus $g$, and a divisor $D$.

[F1] Full AC is the premise of the cohomology and genus suppliers ([[def-axiom-of-choice]]).

[F2] A nonzero $f\in L(A)$ has effective divisor $(f)+A$, whose degree equals $\deg A$ because principal divisors have degree zero. Negative-degree divisors have $L(A)=0$, and linear equivalence identifies their section spaces ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F3] Riemann–Roch supplies a canonical divisor $K$, $\ell(A)-i(A)=\deg A+1-g$, $\ell(0)=1$ and $i(0)=g$; Serre duality gives $i(A)=\ell(K-A)$ ([[thm-riemann-roch-compact-riemann-surfaces]], [[thm-serre-duality-compact-riemann-surfaces]]).

[F4] A nonconstant meromorphic function is a holomorphic map to the sphere and, on compact $X$, is proper. Its pole order at a point equals its ramification multiplicity over infinity ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F5] A proper nonconstant holomorphic map is surjective and has positive integer degree, equal to the sum of ramification multiplicities over each fibre ([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]]).

[F6] A nonconstant holomorphic map locally has coordinate form $z\mapsto z^e$ with $e\ge1$; when $e=1$, it has a holomorphic local inverse ([[thm-local-normal-form-holomorphic-map-riemann-surfaces]]).

[F7] Genus is invariant under biholomorphism, and the sphere has genus zero ([[def-genus-and-euler-characteristic-compact-riemann-surface]]).

[F8] For every divisor $A$ and point $p$, the point-divisor exact sequence gives $0\le\ell(A)-\ell(A-[p])\le1$ ([[lem-point-divisor-exact-sequence-and-euler-characteristic-step]]).

[F9] Holomorphic sections of $\mathcal O_X(A)$ identify with $L(A)$ via the canonical meromorphic section of divisor $A$. The section represented by $f$ has zero divisor $(f)+A$ ([[def-line-bundle-associated-to-a-divisor]]).

## Verification

1.1 By [F3] at $A=0$, $\ell(K)=i(0)=g$. At $A=K$, duality gives $i(K)=\ell(0)=1$, so Riemann–Roch gives $g-1=\deg K+1-g$, hence $\deg K=2g-2$. If $\deg D<0$, [F2] gives $\ell(D)=0$ and [F3] gives $\chi(\mathcal O_X(D))=\ell(D)-i(D)=-\ell(K-D)$. If $\deg D>2g-2$, then $\deg(K-D)<0$ and [F2] gives $\ell(K-D)=0$; [F3] therefore gives $i(D)=0$ and $\ell(D)=\deg D+1-g$. [F1, F2, F3, given, algebra]

2.1 Suppose $\deg D=0$ and $0\ne f\in L(D)$. The effective divisor $(f)+D$ has degree zero by [F2], so all its nonnegative coefficients vanish; thus $(f)=-D$ and $D\sim0$. Conversely, if $D\sim0$, [F2] and [F3] identify $L(D)$ with the one-dimensional space $L(0)=\mathbb C$. This proves the degree-zero equivalence and the dimension bound. [F2, F3, given, algebra]

3.1 A degree-one proper nonconstant holomorphic map to the sphere is a biholomorphism: [F5] makes every fibre a single point of multiplicity $1$, so the map is bijective; [F6] provides local holomorphic inverses, which agree with its unique inverse and hence glue to a holomorphic inverse. It would force $g=0$ by [F7]. Now let $\deg D=1$, $g\ge1$, and suppose $f_0,f_1\in L(D)$ are independent. Put $E_j=(f_j)+D$, effective of degree one by [F2], and $r=f_1/f_0$. Independence makes $r$ nonconstant, and its pole divisor is bounded by $E_0$ since $(r)=E_1-E_0$. By [F4] and [F5], it is a proper map of degree at most one and at least one, contradicting the preceding genus consequence. Thus $\ell(D)\le1$. A nonzero section gives an effective degree-one divisor $(f)+D=[p]$, so $D\sim[p]$. Conversely $D\sim[p]$ identifies $L(D)$ with $L([p])$, which contains constants and has dimension at most one; hence equality holds. For effective degree-one $D=[p]$, this also proves $L(D)=\mathbb C$. [F2, F3, F4, F5, F6, F7, given, algebra]

4.1 Let $\deg D=2$ and $g\ge2$. Choosing any point $p$, [F8] and step 3.1 give $\ell(D)\le\ell(D-[p])+1\le2$. Suppose $\ell(D)=2$ and choose independent $f_0,f_1\in L(D)$, representing sections as in [F9]. Their effective zero divisors $E_j=(f_j)+D$ each have degree two. Let $B$ be their common effective divisor, with coefficient $B(q)=\min\{E_0(q),E_1(q)\}$. If $B\ne0$, choose a point $q$ in its support; then both $f_j$ belong to $L(D-[q])$, contrary to the degree-one bound in step 3.1. Hence $B=0$. The nonconstant ratio $r=f_1/f_0$ has divisor $E_1-E_0$; because the two effective divisors have disjoint support, its pole divisor is exactly $E_0$, of degree two. By [F4] and [F5], $r:X\to\widehat{\mathbb C}$ has degree two, proving hyperellipticity in the stated analytic sense. Its contrapositive and the bound $\ell(D)\le2$ give $\ell(D)\le1$ for every degree-two divisor on a nonhyperelliptic surface. [F2, F4, F5, F8, F9, step 3.1, choose, algebra] ∎
''')

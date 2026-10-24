---
id: lem-cyclotomic-hecke-polynomial-spectra-and-central-content-sectors
kind: lemma
title: "Polynomial spectra and central content sectors of finite cyclotomic Hecke algebras"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-type-a-affine-presentations-and-charged-cyclotomic-quotients,
       lem-cyclotomic-hecke-bounded-ordered-monomials-span,
       thm-chinese-remainder-theorem-for-comaximal-ideals,
       thm-polynomial-division-algorithm-over-a-field,
       thm-adjugate-identity-over-a-commutative-ring]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Brundan and Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, arXiv:0808.2032v4"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Actual retrieved v4, pp. 1–27 and 31–32 read; local source-interface calculations are reproduced in the strategy. No reading of pp. 28–30 is claimed."
---

## Statement

Use the charged finite-$e$ **field** specialization of
[[def-type-a-affine-presentations-and-charged-cyclotomic-quotients]] over any
field $F$. Then $H^\Lambda_d$ is finite-dimensional before any basis
independence argument. Every polynomial generator has a monic annihilator
split over the residue values $c_i$ ($c_i=q_H^i$ in the nondegenerate branch,
$c_i=i\cdot1_F$ in the degenerate branch
([[lem-cyclotomic-hecke-bounded-ordered-monomials-span]])). The canonical
finite CRT projectors $\varepsilon_r(i)$ and
$e(\nu)=\prod_r\varepsilon_r(\nu_r)$ are orthogonal, sum to $1$, and project
every finite $H$-module onto its joint generalized residue spaces. For each
$\alpha=\sum_in_i\alpha_i$ of height $d$,
$e_\alpha=\sum_{\nu\ \text{of content}\ \alpha}e(\nu)$ is central, and $H$ is
the direct sum of its central ideals $e_\alpha H$, possibly zero; no
primitivity is asserted here. On $e(\nu)$, $z_r-c_{\nu_r}$ is nilpotent, so
all invertible-constant local power series have finite evaluations.

## Facts & Assumptions

**Given:** The charged finite-$e$ specialization over $F$ with a dominant
weight $\Lambda$ of level $\ell=\sum_i\lambda_i$, the cyclotomic polynomial
$f(t)=\prod_i(t-c_i)^{\lambda_i}$ imposed on the first polynomial generator,
and the rank-$d$ quotient $H^\Lambda_d$.

[F1] The presentations and relations of
[[def-type-a-affine-presentations-and-charged-cyclotomic-quotients]] hold; the
nondegenerate parameter $q_H$ has multiplicative order $e$, and in the
degenerate branch $q_H=1$ and $\operatorname{char}F=e$ with distinct
parameters $c_i=i\cdot1_F$
([[lem-cyclotomic-hecke-bounded-ordered-monomials-span]]).

[F2] The cyclotomic quotients are spanned by bounded ordered monomials, with
all exponents $0\le a_r<\ell$, in both branches
([[lem-cyclotomic-hecke-bounded-ordered-monomials-span]]).

[F3] The adjugate identity $\operatorname{adj}(M)M=\det(M)I=M\operatorname{adj}(M)$
holds over every commutative ring, and its determinant has the leading
coefficient computed from the entries
([[thm-adjugate-identity-over-a-commutative-ring]],
[[thm-polynomial-division-algorithm-over-a-field]]).

[F4] For pairwise comaximal ideals the Chinese remainder theorem gives
orthogonal idempotents summing to $1$ and an isomorphism onto the product
([[thm-chinese-remainder-theorem-for-comaximal-ideals]]).

## Proof

**Proof technique:** direct.

**Given:** The charged specialization, its cyclotomic quotient $H=H^\Lambda_d$,

and the data of [F1]–[F4]; write $q=q_H$ for the nondegenerate parameter.

1.1 Normal spanning in the affine algebra. In the degenerate branch the mixed relation $s_rp=(s_rp)s_r-(p-s_rp)(x_r-x_{r+1})^{-1}$ moves every polynomial past a simple reflection at the cost of its permuted term and a polynomial lower term; in the nondegenerate branch the relations $X_rT_r=T_rX_{r+1}+(1-q)X_{r+1}$ and $X_{r+1}T_r=T_rX_r+(q-1)X_{r+1}$, together with their inverse-variable forms, move every Laurent variable to the left. Each correction lowers the number of misplaced variable/crossing pairs, so the process terminates; the $T$-words reduce to the finitely many standard words $T_w$ by the Hecke relations, and in the degenerate branch the $s$-words reduce to the permutations $w$. Hence the affine algebra is spanned by the ordered monomials $X^aT_w$ ($a\in\mathbb Z^d$, $w\in S_d$) in the nondegenerate branch and by $x^aw$ ($a\in\mathbb Z_{\ge0}^d$) in the degenerate branch. No independence and no injection of the finite Hecke algebra is assumed. [F1, algebra]

1.2 Global intertwiners. For neighboring polynomial variables $x,y$ the degenerate element $\theta:=s(x-y)+1$ satisfies $\theta x=y\theta$ and $\theta^2=1-(x-y)^2$; the nondegenerate element $\Theta:=T(1-xy^{-1})+1-q$ satisfies $\Theta x=y\Theta$ and $\Theta^2=(x-qy)(y-qx)/(xy)$. Both are identities in the whole affine algebra: substituting the mixed relations and the quadratic relation (using $T^{-1}=q^{-1}T+q^{-1}-1$ in the nondegenerate case) and clearing the nonzero factors gives exactly the displayed products. Hence they remain valid in the cyclotomic quotient. These are the source's global identities for the two branches, proved here by substitution rather than imported. [F1, algebra]

2.1 Monic propagation. Suppose the split monic polynomial $f$ of degree $D$ annihilates the old variable $x$. Multiplying the corresponding identity of step 1.2 by $f(x)$ and using $f(x)=0$ gives $f(y)\,\theta^2=0\quad\text{or}\quad f(y)\,\Theta^2=0,$ i.e. $f(y)r(x,y)=0$ with $r$ the respective quadratic in $x,y$ (in the nondegenerate case after multiplying by the commuting unit $xy$). Let $C:=F[z]/(f(z))$ with power basis $1,z,\dots,z^{D-1}$ and consider multiplication by $r(z,y)$ on $C[y]$. Its matrix $M(y)$ has leading coefficient $-\operatorname{Id}$ in the degenerate case and $-q\operatorname{Id}$ in the nondegenerate case; hence $\det M(y)$ has invertible leading coefficient. The adjugate identity [F3], applied to the basis vector $1$, gives $r(z,y)\operatorname{adj}(M(y))=\det M(y)$; lifting this identity from $C[y]$ back to $F[z,y]$ and using the defining relation of $C$, then multiplying by $f(y)$ and using $f(y)r(x,y)=0$, yields $f(y)\det M(y)=0$. Dividing by the invertible leading scalar produces a monic annihilator of the next variable. No flatness, algebraic closure, generic faithfulness or denominator difference is used. [F3, step 1.2, algebra]

3.1 Spectral inclusion. If $f(z)=\prod_a(z-a)^{m_a}$ is split with roots $a$, the same power-basis determinant factors as $\prod_ar(a,y)$ with the multiplicities $m_a$: the multiplication matrix is triangular after decomposing $C$ into the finite factors $(z-a)^{m_a}$ (or by the companion-matrix resultant identity). In the degenerate branch the new roots are $a+1,a-1$, and in the nondegenerate branch they are $qa,q^{-1}a$. Starting from $\prod_i(x_1-i)^{\lambda_i}$ therefore produces only roots in the prime-field residue set $\{0,1,\dots,e-1\}$ (closed under $a\mapsto a\pm1$), and starting from $\prod_i(X_1-q^i)^{\lambda_i}$ produces only roots in $\{q^i:i\in I\}$ (closed under $a\mapsto q^{\pm1}a$). Multiplicities are retained and no square-free assumption is made; in the nondegenerate branch all roots are nonzero, so every annihilator has nonzero constant coefficient and expresses the inverse variable as a polynomial in that variable. [step 2.1, algebra]

3.2 Finiteness. Applying step 2.1 successively along the positions shows that every polynomial generator has a finite-degree monic annihilator; its monic relation bounds the exponents of that generator, and in the nondegenerate branch it also eliminates negative exponents. The bounded normal spanning of [F2], together with the normal spanning of step 1.1, therefore expresses every element of the quotient through finitely many exponent tuples and the finitely many $T_w$ (respectively $w$). Hence $H$ is finite-dimensional over $F$, without using the exact $\ell^dd!$ basis theorem or any independence of the bounded monomials. [F2, step 1.1, step 2.1, algebra]

4.1 Canonical CRT projectors. The minimal polynomial of each polynomial generator on its regular module divides the monic split annihilator constructed in steps 2.1 and 3.1, so it is split with only the required residues $c_i$ as roots. For each position $r$ the pairwise comaximal ideals $\bigl((z_r-c_i)^{m_{r,i}}\bigr)_i$ give, by the finite polynomial division algorithm and the Chinese remainder theorem [F4], canonical orthogonal projectors $\varepsilon_r(i)$ in the finite-dimensional algebra generated by $z_r$; these project every finite module onto its generalized $c_i$-eigenspace, including the case of a zero factor. Their commuting products $e(\nu)=\prod_r\varepsilon_r(\nu_r)$ are orthogonal and sum to $1$, and act as the simultaneous generalized residue projectors. On the summand $e(\nu)$ the element $z_r-c_{\nu_r}$ is nilpotent by construction, so every power series with invertible constant term has a finite evaluation there. [F3, F4, step 3.2]

5.1 Centrality of the content sectors. Using the Hecke cross and intertwiner identities of step 1.2, the only possible weights of the image of an element supported on a joint generalized residue $\nu$ under a neighboring Hecke generator are $\nu$ and $s_r\nu$; a fixed-content sum $e_\alpha=\sum_{\nu\ \text{of content}\ \alpha}e(\nu)$ is therefore invariant under every generator, hence central. The central idempotents $e_\alpha$ are orthogonal and sum to $1$, so $H$ is the direct sum of its central ideals $e_\alpha H$, some of which may be zero. Primitivity of the $e_\alpha$ is not asserted or inferred from this argument. [F1, step 1.2, step 4.1, algebra]

6.1 Conclusion. Steps 1.1 and 3.2 give finite-dimensionality before any basis independence; steps 2.1 and 3.1 give the monic split annihilators with the stated residue values; step 4.1 gives the canonical orthogonal CRT projectors and the nilpotence of $z_r-c_{\nu_r}$ on $e(\nu)$; and step 5.1 gives centrality of the content sectors $e_\alpha$ with $H=\bigoplus_\alpha e_\alpha H$. No primitivity, blockwise BK isomorphism, cyclotomic exact-dimension theorem or global-basis claim is used. [step 3.2, step 4.1, step 5.1] ∎

## Remarks

The lemma isolates the finite/split-spectral input of the residue
construction: monic annihilators propagate along the strands by a power-basis
determinant argument, which requires only the adjugate identity over a
commutative ring, and the CRT then produces the canonical residue projectors.
The centrality argument uses the global intertwiners rather than any
primitivity of the content sectors. No choice principle is used.

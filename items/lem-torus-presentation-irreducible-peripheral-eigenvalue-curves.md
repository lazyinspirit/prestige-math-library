---
id: lem-torus-presentation-irreducible-peripheral-eigenvalue-curves
kind: lemma
title: Irreducible peripheral eigenvalue curves of a torus presentation
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: []
justified_by: []
proof_strategy: direct
axiom_use: The argument is finite matrix algebra over the fixed algebraically
  closed field C and uses no choice principle.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Baldwin and Sivek, Torus knots, the A-polynomial, and SL(2,C)
      url: https://arxiv.org/pdf/2405.19197v2
      locator: Example2.13, printed/PDF p8 states the torus formula, citing Ni–Zhang.
        The full finite matrix proof is supplied here.
dependency_level: 0
---

## Statement

Let $a>b\ge2$ be coprime integers, choose integers $\alpha,\beta$ with $a\alpha+b\beta=1$, and put $G=\langle x,y\mid x^a=y^b\rangle$, $h=x^a=y^b$, $\mu=y^\alpha x^\beta$ and $\lambda=h\mu^{-ab}$. Consider all irreducible representations $\rho:G\to SL_2(\mathbb C)$, where irreducible means having no common invariant complex line. The common peripheral eigenvalue pairs $(M,L)\in(\mathbb C^*)^2$ have reduced Zariski closure with vanishing ideal $$(1+M^{2a}L)\quad\hbox{if }b=2,\qquad (M^{2ab}L^2-1)\quad\hbox{if }b>2.$$ More precisely, $\rho(h)=\epsilon I$ with $\epsilon=-1$ when $b=2$ and $\epsilon\in\{1,-1\}$ when $b>2$; each permitted sign occurs in a family realizing every point of the graph $L=\epsilon M^{-ab}$ except possibly finitely many meridian values. The displayed ideal is the ideal of the entire irreducible eigenvalue locus, not just of the exhibited families. No choice axiom is assumed.

## Facts & Assumptions

**Given:** The finite presentation and words in the Statement, with ordinary complex matrix algebra. Every nonconstant one-variable complex polynomial has a complex root; this is the fixed algebraic closure of $\mathbb C$, not a simultaneous selection of roots.

[F1] A two-by-two matrix satisfies $A^2-\operatorname{tr}(A)A+\det(A)I=0$, as entrywise multiplication verifies. A determinant-one matrix with two distinct eigenvalues is diagonalizable by its two eigenvectors.

## Proof

1.1 **Only the specified scalar signs can occur.** The element $h$ commutes with $x$ and $y$, since it is a power of each. A nonscalar two-by-two complex matrix either has two distinct eigenvalues or has a repeated eigenvalue and a unique one-dimensional eigenspace. In the first case every commuting matrix preserves each eigenspace; in the second it preserves the kernel of the nonzero nilpotent part, which is that unique line. Thus a nonscalar $\rho(h)$ would provide a line invariant under both generator matrices, contradicting irreducibility. Consequently $\rho(h)=\epsilon I$, and determinant one forces $\epsilon=\pm1$. If $b=2$ and $\epsilon=1$, the equation $Y^2=I$ for $Y=\rho(y)$ makes $Y$ diagonalizable because $(z-1)(z+1)$ has distinct roots. Its determinant one forces its two eigenvalues to be equal, so $Y=I$ or $-I$. An eigenline of $\rho(x)$ would then be invariant under both generators. Hence only $\epsilon=-1$ is possible for $b=2$. In every case $\rho(\lambda)=\epsilon\rho(\mu)^{-ab}$, so every common peripheral eigenvalue pair satisfies $L=\epsilon M^{-ab}$, including nonsemisimple meridian matrices. [F1, given, algebra]

1.2 **Choose noncentral roots with noncentral meridian powers.** Fix a permitted sign. For a positive integer $n\ge2$ choose $\zeta_n=\exp(2\pi i/n)$ when $\epsilon=1$ and $\zeta_n=\exp(\pi i/n)$ when $\epsilon=-1$. The first case is used only for $n\ge3$, since $\epsilon=1$ is permitted only when $a,b>2$. Set $\xi=\zeta_a$ and $\eta=\zeta_b$. They satisfy $\xi^a=\eta^b=\epsilon$ and neither is $\pm1$. Also $\xi^{\beta}\ne\xi^{-\beta}$ and $\eta^{\alpha}\ne\eta^{-\alpha}$. Indeed the Bezout identity gives $\gcd(\beta,a)=\gcd(\alpha,b)=1$. In the positive-sign case equality of the two powers would imply $a\mid2\beta$ or $b\mid2\alpha$, impossible for the relevant integer greater than two. In the negative-sign case the roots have orders $2a,2b$; equality would imply $a\mid\beta$ or $b\mid\alpha$, also impossible. These explicit roots require no choice family. [given, construct, algebra]

2.1 **An actual irreducible matrix family.** Put $s=\eta+\eta^{-1}$ and, for $v\in\mathbb C$, define $$X=\begin{pmatrix}\xi&0\\0&\xi^{-1}\end{pmatrix},\qquad Y_v=\begin{pmatrix}v&1\\v(s-v)-1&s-v\end{pmatrix}.$$ The second matrix has determinant one and trace $s$, hence distinct eigenvalues $\eta,\eta^{-1}$. Therefore $X^a=Y_v^b=\epsilon I$, and these are actual representations of the displayed presentation for every $v$. Since $X$ has distinct eigenvalues, a common invariant line must be one of its coordinate lines. The upper-right entry of $Y_v$ is $1$, so the second coordinate line is never invariant. The first is invariant exactly when $v(s-v)-1=0$, whose two roots are $\eta,\eta^{-1}$. Thus the representation is irreducible for every $v$ other than these two values. [F1, step 1.2, construct, algebra]

3.1 **The meridian trace varies with a nonzero linear coefficient.** Polynomial division modulo $(z-\eta)(z-\eta^{-1})$ gives $Y_v^\alpha=cY_v+dI$ for constants $c,d$ independent of $v$, including negative $\alpha$ because both eigenvalues are nonzero. Explicitly $c=(\eta^\alpha-\eta^{-\alpha})/(\eta-\eta^{-1})\ne0$ and $d=\eta^\alpha-c\eta$. With $r=\xi^\beta$, one obtains $$\operatorname{tr}(Y_v^\alpha X^\beta)=c(r-r^{-1})v+cr^{-1}s+d(r+r^{-1}).$$ The coefficient is nonzero by step 1.2. For each $M\ne0$ there is consequently exactly one $v$ giving meridian trace $M+M^{-1}$. The two forbidden $v$ values of step 2.1 exclude at most four meridian values, since each equation $M+M^{-1}=q$ is a quadratic after multiplication by $M$. Discard also $M=\pm1$. For every remaining $M$ the meridian has distinct eigenvalues $M,M^{-1}$, so an eigenline with eigenvalue $M$ exists and the longitude, being $\epsilon\mu^{-ab}$, acts there by $L=\epsilon M^{-ab}$. This gives the claimed cofinite graph family for each permitted sign. [F1, step 1.2, step 2.1, construct, algebra]

4.1 **Exact ideals, including all exceptional representations.** Evaluation $L\mapsto\epsilon M^{-ab}$ defines a surjection $\mathbb C[M^{\pm1},L^{\pm1}]\to\mathbb C[M^{\pm1}]$. Its kernel is $(LM^{ab}-\epsilon)$: multiplying by a monomial reduces any expression to a polynomial in $L$, and division by the monic $L-\epsilon M^{-ab}$ over $\mathbb C[M^{\pm1}]$ leaves exactly its evaluated constant remainder. A Laurent polynomial vanishing on the cofinite graph family of step 3.1 therefore has zero evaluated remainder, since a nonzero one-variable Laurent polynomial has only finitely many nonzero roots. Its ideal is precisely this graph ideal. Step 1.1 puts every irreducible eigenvalue pair, including all exceptional meridian values, in the permitted graphs, and step 3.1 supplies a dense family in each. The ideal of the entire locus and of its closure is consequently the intersection of these graph ideals. For $b=2$ the single sign gives $(LM^{2a}+1)$. For $b>2$ put $q=LM^{ab}$; the two ideals $(q-1)$ and $(q+1)$ are comaximal since their difference is $2$, an invertible scalar. Their intersection equals their product: writing $1=A+B$ with $A$ in one and $B$ in the other expresses an element of the intersection as a sum of two product elements. Thus their intersection is $(q^2-1)=(M^{2ab}L^2-1)$. Each graph ideal is prime because its quotient is the Laurent domain just displayed; their intersection is radical. This proves the exact reduced closure assertions by finite algebra with no assumption about completeness of an unspecified image. [step 1.1, step 3.1, construct, algebra] ∎

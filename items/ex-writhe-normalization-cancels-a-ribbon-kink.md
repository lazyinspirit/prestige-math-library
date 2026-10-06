---
id: ex-writhe-normalization-cancels-a-ribbon-kink
kind: example
title: "Writhe normalization cancels a ribbon kink"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 9
deps: [lem-scalar-twist-controls-the-two-markov-stabilizations, thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant, def-axiom-of-choice, def-exponent-sum-and-writhe-of-a-braid, def-absolutely-simple-object, def-markov-conjugation-and-stabilization-moves, thm-choice-implies-dependent-implies-countable-choice, def-twist-and-ribbon-structure, thm-a-braided-rigid-category-has-a-drinfeld-morphism, def-the-categorical-trace-of-a-morphism-into-the-double-dual, lem-markov-moves-preserve-oriented-closure-isotopy, def-closure-of-a-geometric-braid]
justified_by: []
aliases: []
landmark: false
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.10 Remark 8.10.4 (twists from quadratic forms and the normalization discussion), printed pp. 216--218"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume the Axiom of Choice. In the ribbon category of $\mathbb Z/2$-graded
finite-dimensional vector spaces over a field $k$ of characteristic $\ne2$ with the sign braiding
and the parity twist, let $X$ be the odd one-dimensional object, so
$\lambda=\theta_X=-1$ and
$d_X=\operatorname{Tr}_L(j_X)=1$. For $\beta=e\in B_1$ and its positive
stabilization $\sigma_1\in B_2$,
[[lem-scalar-twist-controls-the-two-markov-stabilizations]] gives $t_1(e)=1$
and $t_2(\sigma_1)=(-1)\,t_1(e)=-1$, so the unnormalized values differ by the
factor $\lambda^{-1}=-1$. The exponent sums are $w(e)=0$ and $w(\sigma_1)=1$
([[def-exponent-sum-and-writhe-of-a-braid]]), so the normalized values

$$J_X(\widehat e)=\lambda^{-0}t_1(e)=1,\qquad J_X(\widehat{\sigma_1})=\lambda^{-1}t_2(\sigma_1)=(-1)^{-1}\cdot(-1)=1$$

agree: the writhe factor cancels the kink and produces the invariant of the
unframed unknot predicted by
[[thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant]]. The
common value is $1$ here; since $d_X=1$ is a unit, the further normalization
$d_X^{-1}J_X$ is trivial and also gives $1$ on the unknot.

## Facts & Assumptions

**Given:** AC; the field $k$ with $\operatorname{char}k\ne2$; the category of $\mathbb Z/2$-graded finite-dimensional vector spaces with the sign braiding and the parity twist; its odd one-dimensional object $X$; the braid $e\in B_1$ and its positive stabilization $\sigma_1\in B_2$.

[L1] The model is a ribbon category with $\operatorname{End}(\mathbf 1)=k$ and $X$ absolutely simple, $\theta_X=\lambda\operatorname{id}_X$, so the stabilization lemma gives $t_{n+1}(\iota_n(\beta)\sigma_n^{\pm1})=\lambda^{\pm1}t_n(\beta)$; that lemma is stated under countable choice, which AC supplies here ([[thm-choice-implies-dependent-implies-countable-choice]]); in this model $\lambda=-1$ and the odd line has $d_X=\operatorname{Tr}_L(j_X)=1$, so $t_1(e)=1$ and $t_2(\sigma_1)=-1$ ([[lem-scalar-twist-controls-the-two-markov-stabilizations]], [[def-absolutely-simple-object]]).

[F1] A ribbon twist satisfies balancing and dual-compatibility ([[def-twist-and-ribbon-structure]]); the Drinfeld composite and left trace are those of [[thm-a-braided-rigid-category-has-a-drinfeld-morphism]] and [[def-the-categorical-trace-of-a-morphism-into-the-double-dual]].

[F2] The trivial one-braid closes to the unknot, and stabilization preserves its oriented closure under countable choice ([[def-closure-of-a-geometric-braid]], [[lem-markov-moves-preserve-oriented-closure-isotopy]]). AC supplies that choice assumption as recorded in [L1].

[L2] The exponent sum satisfies $w(\sigma_1)=w(\iota_1(e)\sigma_1)=w(e)+1=1$ and $w(e)=0$ ([[def-exponent-sum-and-writhe-of-a-braid]]); the positive stabilization is $\beta\mapsto\iota_n(\beta)\sigma_n$ ([[def-markov-conjugation-and-stabilization-moves]]).

[L3] Assume AC: the writhe-normalized trace $J_X(\widehat\beta)=\lambda^{-w(\beta)}t_n(\beta)$ is an invariant of oriented unframed link types of closures ([[thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant]], [[def-axiom-of-choice]]).

## Verification


1.1 **Verify the model and dimension.** Even linear maps and graded duals give the rigid $k$-linear category, with the ordinary evaluation and basis coevaluation satisfying the zig-zags. The sign braiding is natural; its hexagons are $(-1)^{p(q+r)}=(-1)^{pq}(-1)^{pr}$ and the analogous identity in the first variable, and its square is the identity. Parity is natural, multiplicative on tensor products and unchanged on duals, so it is a ribbon twist by [F1]. The odd line has only scalar endomorphisms and twist $-1$. For a dual basis $e,e^\vee$, the Drinfeld composite gives $u_X(e)=-e^{\vee\vee}$, hence $j_X(e)=e^{\vee\vee}$; coevaluation $1\mapsto e\otimes e^\vee$ and evaluation $e^{\vee\vee}\otimes e^\vee\mapsto1$ give $d_X=1$. [F1, given, algebra]

1.2 **The writhe exponents.** The trivial one-braid has exponent sum $w(e)=0$, and its positive stabilization $\sigma_1$ has $w(\sigma_1)=1$ by [L2]. [L2, given]

2.1 **The unnormalized values and the kink.** By [L1], $t_1(e)=1$ and $t_2(\sigma_1)=\lambda t_1(e)=-1$. By [F2], the closures both represent the unknot, so the unnormalized evaluation changes by the factor $-1$ under the positive stabilization, the kink contribution modelled by the scalar twist $\lambda=-1$. [L1, L2, F2, step 1.1, given]

3.1 **The normalized values agree.** Substituting steps 2.1 and 1.2, $$J_X(\widehat e)=\lambda^{-w(e)}t_1(e)=(-1)^{0}\cdot1=1,\qquad J_X(\widehat{\sigma_1})=\lambda^{-w(\sigma_1)}t_2(\sigma_1)=(-1)^{-1}\cdot(-1)=1.$$ The two normalized values are equal, in accordance with [L3]. [L3, step 2.1, step 1.2, algebra]

4.1 **Conclusion.** The writhe factor $\lambda^{-w}$ cancels exactly the kink contribution $\lambda$ contributed by the stabilization, so the normalized evaluation is the same on the closure of $e$ and on its positive stabilization, as the invariant theorem predicts; the common value is $1$, and the dimension normalization by $d_X=1$ is trivial here. All computations are finite; the Axiom of Choice is assumed through [L3] and supplies the countable-choice input to [L1], as recorded there. [step 2.1, step 1.2, step 3.1] ∎

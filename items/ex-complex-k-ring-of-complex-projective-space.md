---
id: ex-complex-k-ring-of-complex-projective-space
kind: example
title: The complex K-ring of CPⁿ
status: published
origin: pipeline
deps: [thm-reduced-k-theory-exact-sequence-of-a-cofibration, thm-complex-bott-periodicity, def-external-product-in-complex-k-theory, ex-complex-k-ring-of-the-two-sphere, ex-complex-k-theory-of-even-and-odd-spheres, thm-schubert-cells-give-the-stable-grassmannian-cw-structure, def-axiom-of-choice]
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Proposition 2.24"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Complete relative-product proof, printed pp.66–68"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §3"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Projective bundle theorem and tautological-line convention, printed pp.209–210"
---

## Example

Assume AC. For $n\geq0$, let $\gamma$ be the tautological complex line bundle
on $\mathbb{CP}^n$ and put $x=[\gamma]-1$. Then

$$K^0(\mathbb{CP}^n)\cong\mathbb Z[x]/(x^{n+1}),$$

so $1,x,\ldots,x^n$ is an additive basis. For $n=0$, this reads $x=0$ and
$K^0(\mathbb{CP}^0)=\mathbb Z$.

## Facts & Assumptions

**Given:** an integer $n\geq0$ and AC.

[F1] Reduced complex $K$-theory gives the long exact sequence of a finite CW
pair ([[thm-reduced-k-theory-exact-sequence-of-a-cofibration]]).

[F2] Bott multiplication identifies the iterated reduced product of the
$S^2$ generator with a generator on $S^{2r}$
([[thm-complex-bott-periodicity]]).

[F3] For based well-pointed compact spaces, reduced external products descend
uniquely to a bilinear map $\widetilde K^0(U)\otimes\widetilde K^0(V)\to
\widetilde K^0(U\wedge V)$
([[def-external-product-in-complex-k-theory]]).

[F4] For the fixed clutching convention, $x$ on
$\mathbb{CP}^1=S^2$ is the Bott generator
([[ex-complex-k-ring-of-the-two-sphere]]).

[F5] Even and odd sphere groups have the parity stated in
[[ex-complex-k-theory-of-even-and-odd-spheres]].

[F6] Since $\mathbb{CP}^r=\operatorname{Gr}_1(\mathbb C^{r+1})$, its Schubert
filtration has one cell in each dimension $0,2,\ldots,2r$
([[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]]).

[A1] AC is used through [F1]–[F5]; the finite cover and ring induction add no
new choice.

## Verification

**Proof technique:** induction with Hatcher's relative-product calculation.

1.1 For $r=0$, $\mathbb{CP}^0=*$, its tautological line is trivial, and [F5] gives $K^0(*)=\mathbb Z$ and $K^1(*)=0$. Thus $x=0$ and the asserted presentation holds in the base case. [F5, base]

2.1 Fix $r\geq1$ and assume that $K^1(\mathbb{CP}^{r-1})=0$ and that $1,x,\ldots,x^{r-1}$ is a basis there. By [F6], $\mathbb{CP}^{r-1}\hookrightarrow\mathbb{CP}^r$ has quotient $S^{2r}$. The long exact sequence [F1] and the even-sphere groups [F5] then give $K^1(\mathbb{CP}^r)=0$ and a short exact sequence $0\to\widetilde K^0(S^{2r})\to K^0(\mathbb{CP}^r)\to K^0(\mathbb{CP}^{r-1})\to0$. In particular, the restriction kernel is infinite cyclic. [F1, F5, F6, A1, ih, step 1.1]

3.1 We first construct the relative product used here. For a compact cofibration pair $(X,A)$, write $K^0(X,A)=\widetilde K^0(X/A)$; its quotient is based and well-pointed. For two such pairs $(X,A)$ and $(Y,B)$, the natural homeomorphism $$ \frac{X\times Y}{X\times B\,\cup\,A\times Y} \cong (X/A)\wedge(Y/B) $$ and the reduced external product [F3] define $$ K^0(X,A)\otimes K^0(Y,B)\longrightarrow K^0(X\times Y,X\times B\cup A\times Y). $$ For two closed subspaces $A,B\subseteq X$, the relative diagonal $$ \delta_{A,B}:X/(A\cup B)\longrightarrow (X/A)\wedge(X/B), \qquad [u]\longmapsto [u]\wedge[u], $$ is well-defined since a point of $A\cup B$ maps to the smash basepoint. Pullback along $\delta_{A,B}$ therefore gives $K^0(X,A)\otimes K^0(X,B)\to K^0(X,A\cup B)$. The square formed by $\delta_{A,B}$, the ordinary diagonal of $X$, and the quotient maps $X_+\to X/A$, $X_+\to X/B$, and $X_+\to X/(A\cup B)$ commutes. Thus forgetting relative support sends this product to the ordinary product in $K^0(X)$; the same quotient-square argument, functoriality of pullback, and uniqueness in [F3] show that maps of pairs preserve these relative products. All pairs used below are finite ball or CW cofibration pairs. Now realize $\mathbb{CP}^r$ as the scalar-orbit space of the boundary of $D^2_0\times\cdots\times D^2_r$, and let $C_i$ be the image of the face with its $i$th coordinate on $\partial D^2_i$. Normalizing that coordinate to $1$ identifies $C_i$ with the product of the other $r$ disks, so $C_i$ is a closed $2r$-ball, $\mathbb{CP}^r=\bigcup_{i=0}^r C_i$, and $C_i\cap C_j=\partial C_i\cap\partial C_j$. The tautological line is trivial on $C_i$, hence exactness [F1] supplies a lift $x_i\in K^0(\mathbb{CP}^r,C_i)$ of $x$. For $C_0=D^2_1\times\cdots\times D^2_r$, restriction along the map of pairs $(C_0,\partial_iC_0)\to(\mathbb{CP}^r,C_i)$ sends $x_i$, up to the fixed disk-orientation sign, to the $i$th disk class clutched by $z$, hence to a generator by [F4]. Relative-product naturality now puts $x_1\cdots x_r$ in $K^0(\mathbb{CP}^r,C_1\cup\cdots\cup C_r)$, and the homeomorphism $$ C_0/\partial C_0\cong \mathbb{CP}^r/(C_1\cup\cdots\cup C_r) \cong (D^2/\partial D^2)^{\wedge r} $$ identifies its restriction with the $r$-fold reduced external product of the disk generators. This is a generator by [F2]. Finally let $P=\mathbb{CP}^{r-1}$ be the standard subspace in the last $r$ coordinates. In Hatcher's ball model, $P\subseteq C_1\cup\cdots\cup C_r$ is disjoint from the interior of $C_0$, and the induced quotient map $$ \mathbb{CP}^r/P\longrightarrow \mathbb{CP}^r/(C_1\cup\cdots\cup C_r) $$ is a homotopy equivalence. Its pullback therefore identifies the generator $x_1\cdots x_r$ with a generator of $K^0(\mathbb{CP}^r,P)$. The commuting forget-support maps send this class to the ordinary product $x^r$. Hence the image of $K^0(\mathbb{CP}^r,P)\to K^0(\mathbb{CP}^r)$, which is the restriction kernel from Step 2.1, is generated by the nonzero class $x^r$. [F1, F2, F3, F4, A1, step 2.1, construct]

4.1 By the induction hypothesis in step 2.1, the short exact sequence there and the kernel generator in step 3.1 show that $1,x,\ldots,x^r$ is a basis on $\mathbb{CP}^r$. Apply the independently proved step 3.1 with $r+1$: the class $x^{r+1}$ on $\mathbb{CP}^{r+1}$ belongs to the kernel of restriction to $\mathbb{CP}^r$, so its restriction, namely $x^{r+1}$ on $\mathbb{CP}^r$, is zero. Evaluation therefore induces $\mathbb Z[x]/(x^{r+1})\to K^0(\mathbb{CP}^r)$, and the two displayed bases make it an isomorphism. Together with $K^1(\mathbb{CP}^r)=0$ from step 2.1, this discharges the induction and proves the assertion for every $r=n$, including both the relation and the absence of further additive relations. [step 1.1, step 2.1, step 3.1, discharge-induction, algebra] ∎

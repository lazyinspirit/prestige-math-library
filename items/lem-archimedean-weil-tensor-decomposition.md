---
id: lem-archimedean-weil-tensor-decomposition
kind: lemma
title: Tensor products and duals of archimedean Weil parameters
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - lem-real-weil-parameter-classification-and-tate-gamma-factors
sources:
  references:
    - title: Getz and Hahn, An Introduction to Automorphic Representations
      url: https://sites.duke.edu/jgetz/files/2022/04/Graduate_Text.pdf
      locator: Section 12.2, equations (12.8)–(12.12), Proposition 12.2.2, and Section 12.3, printed pp. 283–287. The tensor decompositions below are locally derived consequences in the explicit matrix normalization of the local supplier, not formulas quoted from this source.
---

## Statement

Let $W_{\mathbb R}=\mathbb C^\times\sqcup j\mathbb C^\times$, where $j^2=-1$ and $jzj^{-1}=\bar z$, and $W_{\mathbb C}=\mathbb C^\times$. Use the characters and two-dimensional representations
$$\chi_{m,u}(z)=(z/|z|)^m|z|^{2u},\qquad \lambda_{\epsilon,u}(z)=|z|^{2u},\qquad \lambda_{\epsilon,u}(j)=(-1)^\epsilon,$$
$$\tau_{m,u}(z)=|z|^{2u}\operatorname{diag}((z/|z|)^m,(z/|z|)^{-m}),\qquad \tau_{m,u}(j)=\begin{pmatrix}0&(-1)^m\\1&0\end{pmatrix}.$$
Here $u\in\mathbb C$, $\epsilon\in\{0,1\}$, and the integer $m$ is arbitrary for $\chi$ and positive for $\tau$. Put $T_{k,u}=\tau_{k,u}$ for $k>0$ and $T_{0,u}=\lambda_{0,u}\oplus\lambda_{1,u}$. Write $\epsilon\oplus\delta$ for addition modulo $2$. Then
$$\lambda_{\epsilon,u}\otimes\lambda_{\delta,v}\cong\lambda_{\epsilon\oplus\delta,u+v},\qquad \lambda_{\epsilon,u}\otimes\tau_{m,v}\cong\tau_{m,u+v},$$
$$\tau_{m,u}\otimes\tau_{n,v}\cong T_{m+n,u+v}\oplus T_{|m-n|,u+v},\qquad \chi_{m,u}\otimes\chi_{n,v}=\chi_{m+n,u+v}.$$
Their complex-linear duals are
$$\lambda_{\epsilon,u}^{\vee}=\lambda_{\epsilon,-u},\qquad \tau_{m,u}^{\vee}\cong\tau_{m,-u},\qquad \chi_{m,u}^{\vee}=\chi_{-m,-u}.$$
Consequently tensor products and duals of finite-dimensional continuous semisimple archimedean Weil representations are semisimple, and these formulas compute their constituents, with multiplicity, independently of decompositions chosen for the inputs.

Let $G(s)=2(2\pi)^{-s}\Gamma(s)$ and $R(s)=\pi^{-s/2}\Gamma(s/2)$. Under the parameter-side Tate convention $L(s,\lambda_{\epsilon,u})=R(s+u+\epsilon)$, $L(s,\tau_{m,u})=G(s+u+m/2)$ and $L(s,\chi_{m,u})=G(s+u+|m|/2)$, with multiplication on direct sums, one has
$$L(s,\lambda_{\epsilon,u}\otimes\lambda_{\delta,v})=R(s+u+v+(\epsilon\oplus\delta)),$$
$$L(s,\lambda_{\epsilon,u}\otimes\tau_{m,v})=G(s+u+v+m/2),$$
$$L(s,\tau_{m,u}\otimes\tau_{n,v})=G(s+u+v+(m+n)/2)G(s+u+v+|m-n|/2),$$
$$L(s,\chi_{m,u}\otimes\chi_{n,v})=G(s+u+v+|m+n|/2).$$
These are meromorphic identities, including the case $m=n$ in the real tensor formula. In particular
$$\tau_{m,u}\otimes\tau_{m,u}^{\vee}\cong\tau_{2m,0}\oplus\lambda_{0,0}\oplus\lambda_{1,0},\qquad L(s,\tau_{m,u}\otimes\tau_{m,u}^{\vee})=G(s+m)G(s).$$
Every real parameter of dimension $d$ yields exactly $d$ real gamma shifts by replacing each $G(w)$ by $R(w)R(w+1)$. At a complex place, replacing $G$ by $G/2$ changes a dimension-$d$ parameter's factor by $2^{-d}$ and leaves its shifts unchanged.

## Statement references

[[lem-real-weil-parameter-classification-and-tate-gamma-factors]]

[Getz and Hahn, §§12.2–12.3](https://sites.duke.edu/jgetz/files/2022/04/Graduate_Text.pdf)

## Facts & Assumptions

**Given:** The groups, representations, parameters and gamma convention in the Statement. Semisimple means a finite direct sum of irreducible representations. The dual is complex-linear, not the conjugate dual.

[F1] The displayed representations are continuous irreducible representations, and every semisimple archimedean Weil representation decomposes uniquely into these constituents. The radial exponents, circle weights and, in weight zero, the eigenvalue of $j$ distinguish them. The local supplier proves $G(w)=R(w)R(w+1)$ meromorphically. [[lem-real-weil-parameter-classification-and-tate-gamma-factors]]

## Proof

1.1 Multiplying the scalar values on $\mathbb C^\times$ and on $j$ proves the formula for two $\lambda$ constituents. Multiplication of the complex characters adds their circle weights and radial exponents, giving the $\chi$ formula. In $\lambda_{\epsilon,u}\otimes\tau_{m,v}$ choose the usual basis $e_+,e_-$ of the second factor, suppressing the first factor's basis vector. The radial scalar is $|z|^{2(u+v)}$, the weights are $m,-m$, and $j$ is $(-1)^\epsilon$ times the displayed $\tau$ matrix. In the basis $e_+,(-1)^\epsilon e_-$ its matrix is exactly the displayed matrix for $\tau_{m,u+v}$. This proves the mixed formula for both parities. [given, construct, algebra]

1.2 For the tensor of two $\tau$ constituents use bases $e_+,e_-$ and $f_+,f_-$. On the span of $e_+\otimes f_+,e_-\otimes f_-$ the weights are $m+n,-m-n$. The first vector maps under $j$ to the second, and the second to $(-1)^{m+n}$ times the first. This is $\tau_{m+n,u+v}$. The complementary span $D$ of $e_+\otimes f_-,e_-\otimes f_+$ has weights $m-n,n-m$. Both spans are invariant under $\mathbb C^\times$ and $j$, hence under $W_{\mathbb R}$, and together they give the entire four-dimensional tensor space. [given, construct, algebra]

1.3 Dualizing a character inverts its values, proving both character dual formulas. The dual of $\tau_{m,u}$ has radial character $|z|^{-2u}$ and weights $-m,m$. Its $j$ operator exchanges the two weight lines and its square is $(-1)^m$. Choose a nonzero vector $x$ on its positive-weight line and use $x,jx$ as basis; the matrices are those of $\tau_{m,-u}$. This proves the asserted dual isomorphism without identifying a conjugate dual. [given, construct, algebra]

2.1 If $m\ne n$, choose the positive-weight elementary tensor $x$ in $D$ and set $y=jx$. The vectors have opposite nonzero weights, so are independent. On all of $D$, $j^2=(-1)^{m+n}=(-1)^{|m-n|}$. Thus in the basis $x,y$ the matrices are exactly those of $\tau_{|m-n|,u+v}$. If $m=n$, put $x=e_+\otimes f_-$ and $y=e_-\otimes f_+$. Now the circle acts trivially and $jx=(-1)^m y$, $jy=(-1)^m x$. The independent vectors $x+(-1)^m y$ and $x-(-1)^m y$ have $j$-eigenvalues $1,-1$ respectively. Their radial action is $|z|^{2(u+v)}$. Hence $D\cong\lambda_{0,u+v}\oplus\lambda_{1,u+v}$, proving the tensor formula also in the equal-weight case. [step 1.2, given, construct, algebra]

3.1 Decompose two input semisimple representations using [F1]. Distributivity of tensor products over finite direct sums and steps 1.1, 1.2 and 2.1 exhibit their tensor as a direct sum of irreducibles; step 1.3 does the same for the dual. Every operation used here is on finitely many finite-dimensional spaces. Changing decompositions or bases gives isomorphic tensors and duals through the induced linear isomorphisms. The uniqueness assertion in [F1] then makes the resulting constituent multiplicities independent of those choices. [F1, step 1.1, step 2.1, step 1.3, algebra]

4.1 Apply the given multiplicative gamma convention to the decompositions. For $k>0$, $L(s,T_{k,a})=G(s+a+k/2)$. At $k=0$ the two lines give $R(s+a)R(s+a+1)=G(s+a)$ by [F1]. Thus the same formula applies at zero, yielding every displayed tensor factor including $m=n$. Combining the real tensor rule with the dual rule sets $n=m$, $v=-u$, giving the asserted endomorphism-parameter decomposition and factor. Finally each one-dimensional real constituent contributes one $R$ factor and each two-dimensional real constituent contributes two by [F1], giving exactly the dimension in shifts. A complex parameter has exactly its dimension in character constituents; replacing each $G$ by $G/2$ therefore multiplies the full factor by $2^{-d}$ without changing any shift. [given, F1, step 1.1, step 2.1, step 1.3, step 3.1, algebra] ∎

## Limits

This is a parameter-side prerequisite for the tensor factors invoked in the batch-12 standard and Rankin–Selberg definition. It starts with given semisimple Weil parameters. It supplies no assignment from a representation of $\mathrm{GL}_n(\mathbb R)$ or $\mathrm{GL}_n(\mathbb C)$, no archimedean standard-module classification, no p-adic correspondence, and no compatibility with independently defined local integrals or epsilon factors. The source is used for the constituent and factor framework; the matrix tensor and dual arguments above are local derivations. No general correspondence proof is imported from its Theorem 12.3.2. This result has received no independent proof review.

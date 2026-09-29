---
id: lem-positive-type-functions-define-a-pre-hilbert-form
kind: lemma
title: Positive-type functions define the GNS pre-Hilbert form
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuous-function-of-positive-type, def-real-and-complex-inner-product-space]
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Bekka and de la Harpe, Unitary Representations of Groups, Duals, and Characters, Construction 1.B.5, Chapter 1 §1.B, printed pp. 27–28"
      url: "https://arxiv.org/pdf/1912.07262"
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Appendix C §C.4, proof of Theorem C.4.10, printed pp. 375–376"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
---

## Statement

Let $G$ be a topological group and let $\varphi:G\to\mathbb C$ be a
continuous function of positive type. Write $\mathbb C^{(G)}$ for the complex
vector space of all finitely supported functions $f:G\to\mathbb C$; no
continuity or compact-support condition is imposed on these functions. For
$f,h\in\mathbb C^{(G)}$, define
$$B_\varphi(f,h)=\sum_{x,y\in G}f(x)\overline{h(y)}\,\varphi(y^{-1}x).$$
Then $B_\varphi$ is a positive-semidefinite sesquilinear form, linear in its
first argument. Its null space
$$N_\varphi=\{f\in\mathbb C^{(G)}:B_\varphi(f,f)=0\}$$
is orthogonal to all of $\mathbb C^{(G)}$, and $B_\varphi$ induces an inner
product on the quotient $\mathbb C^{(G)}/N_\varphi$. In particular,
$$B_\varphi(\delta_x,\delta_y)=\varphi(y^{-1}x)\qquad(x,y\in G),$$
where $\delta_x$ is the function equal to $1$ at $x$ and $0$ elsewhere.

## Facts & Assumptions

[A1] For every finite list $g_1,\ldots,g_n\in G$, the matrix
$\bigl(\varphi(g_i^{-1}g_j)\bigr)_{i,j}$ is positive semidefinite; its
quadratic form with coefficients $a_1,\ldots,a_n$ is nonnegative
([[def-continuous-function-of-positive-type]]).

[A2] The complex inner-product convention is linear in the first argument
and conjugate-symmetric ([[def-real-and-complex-inner-product-space]]).

## Proof

**Given:** A topological group $G$ and a continuous positive-type function
$\varphi:G\to\mathbb C$.

**Proof technique:** direct.

1.1 The sums defining $B_\varphi(f,h)$ are finite because $f$ and $h$ have finite support, and the formula is linear in $f$ and conjugate-linear in $h$, hence sesquilinear with the convention in [A2]. [A2, algebra]

1.2 If $f=0$, then $B_\varphi(f,f)=0$; otherwise list its finite support as $g_1,\ldots,g_n$ and put $a_i=f(g_i)$. By [A1] and reindexing the finite sum, $B_\varphi(f,f)=\sum_{i,j}a_i\overline{a_j}\,\varphi(g_j^{-1}g_i)=\sum_{i,j}\overline{a_i}\,\varphi(g_i^{-1}g_j)a_j\ge0$. Thus every diagonal value is real and nonnegative. [A1]

2.1 For any $f,h$ and $z\in\mathbb C$, step 1.2 applied to $f+zh$ shows $B_\varphi(f+zh,f+zh)\in\mathbb R$. Expanding by step 1.1, the diagonal terms are real and the cross term is $zB_\varphi(h,f)+\overline zB_\varphi(f,h)$; its being real for $z=1$ and $z=i$ implies $B_\varphi(h,f)=\overline{B_\varphi(f,h)}$. Hence the form is Hermitian. [step 1.1, step 1.2, algebra]

3.1 Put $a=B_\varphi(f,f)$, $b=B_\varphi(h,h)$ and $c=B_\varphi(f,h)$. By steps 1.2 and 2.1, $B_\varphi(f+zh,f+zh)=a+2\operatorname{Re}(z\overline c)+|z|^2b\ge0$ for every $z\in\mathbb C$. If $b>0$, take $z=-c/b$ to obtain $|c|^2\le ab$. If $b=0$ and $c\ne0$, take $z=-t c/|c|$ with $t>a/(2|c|)$; the displayed quantity is $a-2t|c|<0$, a contradiction. Thus $|B_\varphi(f,h)|^2\le B_\varphi(f,f)B_\varphi(h,h)$ in all cases. [step 1.2, step 2.1, algebra]

4.1 By step 3.1, every $f\in N_\varphi$ satisfies $B_\varphi(f,h)=0$ for every $h$. This radical property makes $N_\varphi$ a complex linear subspace, since sums of null vectors and scalar multiples remain null. Changing either representative by an element of $N_\varphi$ leaves $B_\varphi$ unchanged. The induced form on the quotient is positive definite: if $B_\varphi([f],[f])=0$, then $f\in N_\varphi$ and $[f]=0$. It is therefore an inner product under [A2], including the zero quotient when $\varphi=0$. [A2, step 1.1, step 2.1, step 3.1]

5.1 For $\delta_x$ and $\delta_y$, only the summand with first index $x$ and second index $y$ survives, so $B_\varphi(\delta_x,\delta_y)=\varphi(y^{-1}x)$. [algebra] ∎

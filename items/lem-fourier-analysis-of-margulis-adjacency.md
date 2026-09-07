---
id: lem-fourier-analysis-of-margulis-adjacency
kind: lemma
title: "Fourier analysis of margulis adjacency"
status: draft
origin: pipeline
deps: [lem-finite-torus-fourier-orthogonality-and-affine-change, def-margulis-gabber-galil-graph, lem-margulis-family-is-constant-degree-and-neighbor-computable]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §8.2 Theorems8.7–8.8, pp71–72; only the reduction, not the sharp constant."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Statement

Let $T_1(x,y)=(x+2y,y)$, $T_2(x,y)=(x,y+2x)$ modulo $m$. Define the forward operator $Kf(x)=f(T_1x)+f(T_1x+e_1)+f(T_2x)+f(T_2x+e_2)$. For real mean-zero $f$, put $g=|\widehat f|$ and
$$Q(g)=\sum_z2g(z)\bigl[g(T_2^{-1}z)|\cos(\pi z_1/m)|+g(T_1^{-1}z)|\cos(\pi z_2/m)|\bigr].$$
Then $g(0)=0$, $\|f\|^2=\sum_z g(z)^2$, $|\langle f,Kf\rangle|\le Q(g)$, and the full Margulis adjacency $A$ satisfies $|\langle f,Af\rangle|\le2Q(g)$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For the normalized negative-exponent Fourier transform on $(\mathbb Z/m\mathbb Z)^2$, the characters are an orthonormal basis, and $$f=\sum_b\widehat f(b)\chi_b,\quad \|f\|^2=\sum_b|\widehat f(b)|^2,\quad \sum_x f(x)=0\iff\widehat f(0)=0.$$ For every invertible matrix $T$ over $\mathbb Z/m\mathbb Z$, and $g(x)=f(Tx+a)$, $$\widehat g(y)=\omega^{\,y\cdot T^{-1}a}\widehat f(T^{-\mathsf T}y).$$ ([[lem-finite-torus-fourier-orthogonality-and-affine-change]]).

[F2] The Margulis graph on $(\mathbb Z/m\mathbb Z)^2$ is symmetric and $8$-regular, with $m^2$ vertices, for every $m\ge1$. One specified neighbor is computable in polynomial time in $\log(m+2)$; the whole adjacency list is computable in $O(m^2\operatorname{poly}(\log(m+2)))$ bit operations. ([[lem-margulis-family-is-constant-degree-and-neighbor-computable]]).

[F3] For integer $m\ge1$, the Margulis–Gabber–Galil graph has at $(x,y)$ the four slots $(x+2y,y)$, $(x+2y+1,y)$, $(x,y+2x)$, $(x,y+2x+1)$ and the four inverse slots $(x-2y,y)$, $(x-2y-1,y)$, $(x,y-2x)$, $(x,y-2x-1)$, with multiplicities and fixed points retained. ([[def-margulis-gabber-galil-graph]]).

## Proof

1.1 The Fourier identities give $g(0)=0$ and the stated norm equality. Since $T_1^{\mathsf T}=T_2$, the transform of the first pair of summands in $Kf$ is $(1+\omega^{z_1})\widehat f(T_2^{-1}z)$; the second pair gives $(1+\omega^{z_2})\widehat f(T_1^{-1}z)$. The phase uses $T_j^{-1}e_j=e_j$. [F1]

2.1 Parseval's inner-product identity (obtained by expanding both functions in the orthonormal character basis) expresses $\langle f,Kf\rangle$ as the coefficient inner product. Apply the triangle inequality and $|1+e^{2i\theta}|=2|\cos\theta|$ to obtain $Q(g)$. The absolute cosines are independent of residue representatives. [step 1.1, algebra]

3.1 The four slots defining $K$ are exactly the forward slots in the Margulis construction, and the other four are their inverses. Inverse permutations are the adjoints of the forward permutation operators under uniform counting, so $A=K+K^*$. Therefore $\langle f,Af\rangle=2\operatorname{Re}\langle f,Kf\rangle$, proving the last bound. For the singleton torus every mean-zero function vanishes and all displayed sums are zero. [F3, F2, step 2.1] ∎

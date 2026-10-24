---
id: lem-temperley-lieb-exact-truncation-reduces-decomposition-to-trivial-factors
kind: lemma
title: "Exact Temperley–Lieb truncation reduces decomposition to trivial factors"
status: published
dependency_level: 7
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-temperley-lieb-link-state-standard-modules
  - lem-temperley-lieb-link-state-module-action-is-well-defined
  - lem-temperley-lieb-link-state-gram-form-is-invariant
  - cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules
  - def-temperley-lieb-diagram-category
  - thm-temperley-lieb-diagram-category-laws
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Robert A. Spencer, The Modular Temperley–Lieb Algebra"
      url: "https://arxiv.org/pdf/2011.01328"
      locator: "§5, Lemmas 5.1–5.3 and Corollary 5.4; the local proof explicitly proves compatibility of form radicals using paired, possibly different retractions."
---

## Statement

Let $K$ be any field, $\delta\in K$, and let $0\le r\le n$ with $n-r$ even. Assume $r>0$ or $\delta\ne0$ or $n=r=0$. Put $A_n=\mathrm{TL}_n(K,\delta)$, use the right modules $W_{n,t}$ of [[def-temperley-lieb-link-state-standard-modules]], and put $D_{n,t}=W_{n,t}/\operatorname{rad}\phi_{n,t}$. There are $y,z:n\to r$ with $y\circ z^*=1_r$, and for $r>0$ both may be chosen as basis monic diagrams. There is an idempotent $e\in A_n$ with $eA_ne\cong A_r$ such that $M\mapsto Me$ is exact, sends $W_{n,t}$ to $W_{r,t}$, and sends $D_{n,t}$ to $D_{r,t}$, with value zero when $t>r$.

Consequently, for every allowed $m$,
$$[W_{n,m}:D_{n,r}]=[W_{r,m}:D_{r,r}],$$
where $W_{r,m}=0$ if $m>r$. The module $D_{r,r}=W_{r,r}$ is one dimensional and every diagram generator acts by zero. Thus the decomposition problem reduces exactly to multiplicities of this trivial module. The excluded case $n>r=0,\delta=0$ has $D_{n,0}=0$ and is not a simple label.

## Facts & Assumptions

**Given:** The field, loop parameter, labels, diagram category and right link-state modules in the Statement.

[F1] The right action is composition modulo diagrams of smaller propagation, and reflection reverses composition ([[def-temperley-lieb-link-state-standard-modules]], [[lem-temperley-lieb-link-state-module-action-is-well-defined]], [[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagram-category-laws]]).

[F2] The coefficient-of-identity forms are symmetric and satisfy $\phi(xa,w)=\phi(x,wa^*)$ ([[lem-temperley-lieb-link-state-gram-form-is-invariant]]).

[F3] The nonzero form quotients $D_{n,t}$ are a complete pairwise nonisomorphic list of absolutely simple modules ([[cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules]]).

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 We construct $y,z:n\to r$ with $y\circ z^*=1_r$. Write $n=r+2k$. If $k=0$, take identities. If $r>0$, take $y$ with bottom cups $(1,2),(3,4),\ldots,(2k-1,2k)$ and all remaining sites propagating; take $z$ with cups $(2,3),(4,5),\ldots,(2k,2k+1)$ and all remaining sites propagating. In $y\circ z^*$, the first through strand follows the single alternating chain through sites $1,2,\ldots,2k+1$, while each remaining through strand is straight. There is no closed component, and the exterior matching is $1_r$. If $r=0$ and $\delta\ne0$, choose the same adjacent perfect matching $y=z_0$ on $n=2k$ sites and put $z=\delta^{-k}z_0$. Then $y\circ z^*=\delta^{-k}\delta^k1_0=1_0$. This also handles $n=r=0$ with the empty diagram and no scalar inversion. [F1, given, construct, algebra]

2.1 Set $e=z^*\circ y\in A_n$. Step 1.1 gives $e^2=e$. The map $A_r\to eA_ne$ sending $a$ to $z^*\circ a\circ y$ is multiplicative because $y\circ z^*=1_r$, and its inverse is $b\mapsto y\circ b\circ z^*$. Indeed the first composite is identity, and the second is $b\mapsto ebe=b$ on the corner. Thus it is an algebra isomorphism with identity $1_r$ mapping to $e$. [F1, step 1.1, algebra]

3.1 The functor $M\mapsto Me$ preserves exact sequences. If $0\to M'\to M\to M''\to0$ is exact, its injection remains injective on the subspaces obtained by multiplication by $e$. If $x''e\in M''e$, lift $x''$ to $x\in M$ and then $xe$ lifts $x''e$, proving surjectivity. If $xe$ maps to zero, it belongs to $M'$ and satisfies $(xe)e=xe$, hence belongs to $M'e$, proving exactness in the middle. These are corner-module maps under step 2.1. [step 2.1, algebra]

3.2 For every label $t$, the map $W_{n,t}e\to W_{r,t}$ sending $xe$ to $x\circ z^*$ is well-defined, since diagrams of propagation less than $t$ remain such after composition. Its inverse sends $u:r\to t$ to $u\circ y$, which lies in $W_{n,t}e$. Their composites are identity by $y\circ z^*=1_r$ and $xe=x\circ z^*\circ y$. They respect right $A_r$ action under the corner identification in step 2.1. If $t>r$, every diagram $r\to t$ has propagation less than $t$, so both spaces vanish. [F1, step 1.1, step 2.1, algebra]

4.1 We verify compatibility with radicals without requiring $e=e^*$. Swapping $y,z$ in step 3.2 identifies $W_{n,t}e^*$ with $W_{r,t}$ by $x\mapsto x\circ y^*$, whose inverse is $v\mapsto v\circ z$. The form pairing of $u\circ y$ and $v\circ z$ is the coefficient of $1_t$ in $u\circ y\circ z^*\circ v^*=u\circ v^*$, hence is $\phi_{r,t}(u,v)$. Moreover, for $x\in W_{n,t}e$ and any $w\in W_{n,t}$, invariance gives $\phi_{n,t}(x,w)=\phi_{n,t}(xe,w)=\phi_{n,t}(x,we^*)$. Therefore $x$ is in the full radical precisely when its pairing against $W_{n,t}e^*$ vanishes. Under the two identifications this is exactly the condition that $u$ belongs to $\operatorname{rad}\phi_{r,t}$. Thus $(\operatorname{rad}\phi_{n,t})e$ corresponds to $\operatorname{rad}\phi_{r,t}$, and exactness in step 3.1 proves $D_{n,t}e\cong D_{r,t}$. [F2, step 1.1, step 3.1, step 3.2, algebra]

5.1 A finite-dimensional $A_n$-module has a composition series by induction on its vector-space dimension. Apply the exact functor of step 3.1 to such a series for $W_{n,m}$. By [F3] and step 4.1, each simple factor $D_{n,t}$ contributes either zero or the simple factor $D_{r,t}$. Distinct surviving labels remain distinct by [F3]. In particular, only the factor with $t=r$ contributes $D_{r,r}$, and it contributes once. Step 4.1 identifies the resulting filtered module with $W_{r,m}$, giving the claimed multiplicity equality. [F3, step 3.1, step 3.2, step 4.1, algebra]

6.1 The sole basis vector of $W_{r,r}$ is $1_r$; every generator lowers propagation and thus acts by zero, and its form value on that vector is $1$. Hence $D_{r,r}=W_{r,r}$ is the stated one-dimensional module. Finally, for $n>0$ even and $\delta=0$, gluing any two perfect matchings creates at least one closed component, so $\phi_{n,0}$ is identically zero and $D_{n,0}=0$. This explains the precise excluded branch and completes the assertion over every field, including characteristic two. [F1, F2, step 1.1, step 5.1, algebra] ∎


## Remarks

The first pair of arrows displays the retraction of step 1.1: $y\circ z^*=1_r$, whereas the opposite composite is $z^*\circ y=e$. The next two pairs display the resulting isomorphisms of steps 2.1 and 3.2. Here $\alpha(a)=z^*\circ a\circ y$, $\beta(b)=y\circ b\circ z^*$, $\Phi(xe)=x\circ z^*$, and $\Psi(u)=u\circ y$. Each lower arrow is inverse to the upper arrow in its pair, except in the first pair where the composite on $n$ is $e$. All arrows denote morphisms or maps, rather than individual strands of a basis diagram; the proof above is independent of this illustration.

```tikz
\begin{tikzpicture}
  \node (n) at (0,0) {$n$};
  \node (r) at (5,0) {$r$};
  \draw[->] (n) to[bend left=20] node[above] {$y$} (r);
  \draw[->] (r) to[bend left=20] node[below] {$z^*$} (n);
  \node at (2.5,-1.1) {$y\circ z^*=1_r,\qquad z^*\circ y=e$};
  \node (Ar) at (0,-2.5) {$A_r$};
  \node (corner) at (5,-2.5) {$eA_ne$};
  \draw[->] (Ar) to[bend left=20] node[above] {$\alpha$} (corner);
  \draw[->] (corner) to[bend left=20] node[below] {$\beta$} (Ar);
  \node (Wne) at (0,-4.6) {$W_{n,t}e$};
  \node (Wr) at (5,-4.6) {$W_{r,t}$};
  \draw[->] (Wne) to[bend left=20] node[above] {$\Phi$} (Wr);
  \draw[->] (Wr) to[bend left=20] node[below] {$\Psi$} (Wne);
\end{tikzpicture}
```

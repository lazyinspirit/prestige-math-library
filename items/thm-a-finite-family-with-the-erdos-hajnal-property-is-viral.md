---
id: thm-a-finite-family-with-the-erdos-hajnal-property-is-viral
kind: theorem
title: "Every finite family with the Erdős–Hajnal property is viral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-erdos-hajnal-property-and-constant, lem-erdos-hajnal-constants-are-downward-closed, def-viral-property-for-a-finite-family, def-t-k-homogeneous-property, def-h-free-and-family-free-graph, def-induced-copy-number, def-c-sparse-and-c-restricted-vertex-set, def-real-power, thm-real-power-laws, thm-real-power-agrees-with-rational-exponent, thm-of-archimedean, thm-linearity-of-expectation, lem-many-good-two-t-vertex-sets-force-many-homogeneous-k-sets, lem-small-total-copy-expectation-forces-many-homogeneous-k-sets, lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets, lem-complement-swaps-cliques-and-stable-sets, lem-restrictedness-is-complement-invariant, lem-sparsity-depends-only-on-the-induced-subgraph, lem-exponential-dominates-one-plus-x, thm-natural-logarithm-laws, thm-exponential-beats-every-polynomial]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Huang, Y. Ju, and Y. Zhou, Erdős-Hajnal beyond the five-vertex path, Theorem 1.3"
      url: "https://arxiv.org/html/2606.06258v2"
    - title: "M. Bucić, J. Fox, and H. T. Pham, Equivalence between Erdős-Hajnal and polynomial Rödl and Nikiforov conjectures, Theorem 16"
      url: "https://arxiv.org/html/2403.08303v1"
    - title: "T. H. Nguyen, Notes on Recent Work on the Erdős–Hajnal Conjecture, §1 and §2"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
pipeline_run: null
---

## Statement

Every finite family of graphs with the Erdős–Hajnal property is viral.

## Facts & Assumptions

**Given:** A finite family $\mathcal F$ of graphs with the Erdős–Hajnal property.

[L1] A positive real $c$ is an Erdős–Hajnal constant for the class of $\mathcal F$-free graphs when every nonempty $\mathcal F$-free graph $H$ satisfies $\operatorname{hom}(H)\ge|V(H)|^c$, and every smaller positive exponent is again an Erdős–Hajnal constant ([[def-erdos-hajnal-property-and-constant]], [[lem-erdos-hajnal-constants-are-downward-closed]]).

[L2] For positive real bases, $(a^r)^s=a^{rs}$, and for rational exponents the real-power convention agrees with the existing rational-power convention ([[thm-real-power-laws]], [[thm-real-power-agrees-with-rational-exponent]]).

[L3] The class of $\mathcal F$-free graphs has the $(t,k)$-homogeneous property exactly when every $\mathcal F$-free graph on $t$ vertices contains a homogeneous $k$-element subset ([[def-t-k-homogeneous-property]], [[def-h-free-and-family-free-graph]]).

[L4] Expectation is linear on a finite probability space ([[thm-linearity-of-expectation]]).

[L5] Let $1\le k\le t$, suppose every $\mathcal F$-free graph has the $(t,k)$-homogeneous property, and let $G$ have $n\ge2t$ vertices. If the total expected forbidden-copy count on a uniformly random $2t$-vertex subset is at most $t/2$, then $G$ has at least $\tfrac12(n/(2t))^k$ homogeneous $k$-sets ([[lem-small-total-copy-expectation-forces-many-homogeneous-k-sets]]).

[L6] If $0<\epsilon\le1$, $(1-\epsilon)^\ell n\le u$, and every induced subgraph on at least $u$ vertices has maximum degree at least $\epsilon|S|-1$, then the graph has at most $\binom{n}{\ell}\binom{u}{k-\ell}$ stable sets of size $k$ ([[lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets]]).

[L7] Complementation swaps cliques with stable sets ([[lem-complement-swaps-cliques-and-stable-sets]]), and $\epsilon$-restrictedness is complement-invariant ([[lem-restrictedness-is-complement-invariant]]).

[L8] If an induced subgraph has maximum degree less than $\epsilon|S|$, then it is $\epsilon$-sparse ([[lem-sparsity-depends-only-on-the-induced-subgraph]]).

[L9] For every real $x$, $1+x\le\exp(x)$, so in particular $1-\epsilon\le\exp(-\epsilon)$ for $\epsilon\in(0,1)$ ([[lem-exponential-dominates-one-plus-x]]).

[L10] The natural logarithm is strictly increasing and satisfies $\log(1/x)=-\log x$ for $x>0$ ([[thm-natural-logarithm-laws]]).

[L11] For every natural number $r$ and every positive real $a$, $x^r/\exp(ax)\to0$ as $x\to+\infty$ ([[thm-exponential-beats-every-polynomial]]).

[L12] The Archimedean property: for every real $x$ there exists a natural number $m\ge1$ with $x<m$ ([[thm-of-archimedean]]).

[L13] A family is viral when one exponent $d\ge1$ makes the defining copy-count implication hold for every $\epsilon\in(0,\tfrac12)$ and every nonempty graph ([[def-viral-property-for-a-finite-family]]).

## Proof

**Proof technique:** direct.

1.1 If $K_0\in\mathcal F$, then every nonempty graph $G$ has $\operatorname{ind}_{K_0}(G)=1$, so the inequality $\operatorname{ind}_{K_0}(G)<(\epsilon^d|V(G)|)^0$ reads $1<1$ and has no nonempty instance; if $K_1\in\mathcal F$, then $\operatorname{ind}_{K_1}(G)=|V(G)|$ and the inequality $\operatorname{ind}_{K_1}(G)<\epsilon^d|V(G)|$ is impossible because $\epsilon^d<1$. Thus in either case $\mathcal F$ is viral vacuously. We may therefore assume from now on that every $H\in\mathcal F$ has at least two vertices. [L13, given, algebra]

1.2 Choose an Erdős–Hajnal constant $c>0$ for the class of $\mathcal F$-free graphs. [given, L1, choose]

2.1 Apply [L12] to $1/c$ to choose a natural number $m\ge1$ with $1/c<m$, so $1/m<c$; by [L1], the exponent $1/m$ is also an Erdős–Hajnal constant for the class of $\mathcal F$-free graphs. [step 1.2, L1, L12, choose]

3.1 Write $q:=|\mathcal F|$. Since [L11] makes $(7x)^{2m}/2^x\to0$ and $q(7x)^m/2^{2x}\to0$ as $x\to+\infty$, choose an integer $d>4m$ such that $32(7d)^{2m}<2^{d-4m}$ and $8q(7d)^m<2^{2d-2m}$. [step 2.1, L11, choose]

4.1 Let $\epsilon\in(0,\tfrac12)$ and let $G$ be a nonempty graph on $n$ vertices with $\operatorname{ind}_H(G)<(\epsilon^d n)^{|V(H)|}$ for every $H\in\mathcal F$. Put $\delta:=\epsilon^d$, $\ell:=\left\lceil d\log(1/\epsilon)/\epsilon\right\rceil$, $k:=2\ell$, and $t:=k^m$. If $\delta n<1$, then any singleton vertex set is $0$-sparse and hence $\epsilon$-restricted, with size $1>\delta n$; so we may assume $\delta n\ge1$. [step 2.1, step 3.1, L13, choose]

5.1 Applying [L9] to $x=1/\epsilon-1>0$ gives $1/\epsilon\le\exp(1/\epsilon-1)$, and [L10] therefore yields $\log(1/\epsilon)<1/\epsilon$. Hence $\ell\le d/\epsilon^2+1$, so $k=2\ell\le 2d/\epsilon^2+2\le 7d/\epsilon^2$, and therefore $t\le(7d)^m\epsilon^{-2m}$. [step 4.1, L9, L10, algebra]

5.2 From [L9] we have $1-\epsilon\le\exp(-\epsilon)$, so $(1-\epsilon)^\ell\le\exp(-\epsilon\ell)$. Since $\ell\ge d\log(1/\epsilon)/\epsilon$, strict increase of the exponential and [L10] give $\exp(-\epsilon\ell)\le\exp(-d\log(1/\epsilon))=\epsilon^d=\delta$. Thus $(1-\epsilon)^\ell n\le\delta n$. [step 4.1, L2, L9, L10]

6.1 Suppose there were no $\epsilon$-restricted subset of $V(G)$ of size at least $\delta n$, and put $u:=\lceil\delta n\rceil$. Because vertex-set sizes are integers, this means there is no $\epsilon$-restricted subset of size at least $u$. Since step 5.2 gives $(1-\epsilon)^\ell n\le\delta n\le u$, no induced subgraph of $G$ on at least $u$ vertices is $\epsilon$-sparse or $\epsilon$-dense. By [L7] and [L8], every induced subgraph of $G$ and of $\overline G$ on at least $u$ vertices therefore has maximum degree at least $\epsilon|S|-1$. [step 4.1, step 5.2, L7, L8]

6.2 Step 5.1 gives $t\delta^2\le(7d)^m\epsilon^{2d-2m}\le(7d)^m2^{-(2d-2m)}$ and $t^2\delta\le(7d)^{2m}\epsilon^{d-4m}\le(7d)^{2m}2^{-(d-4m)}$, so step 3.1 yields $8qt\delta^2\le1$ and $32t^2\delta\le1$. Since $\delta n\ge1$, the second inequality forces $n\ge1/\delta\ge32t^2>2t$. [step 3.1, step 4.1, step 5.1, algebra]

6.3 Every $\mathcal F$-free graph on exactly $t=k^m$ vertices satisfies $\operatorname{hom}(H)\ge t^{1/m}=(k^m)^{1/m}=k$ by steps 2.1 and [L2]. Hence the class of $\mathcal F$-free graphs has the $(t,k)$-homogeneous property. [step 2.1, step 5.1, L1, L2, L3]

7.1 Step 6.1 gives the hypotheses of [L6] for both $G$ and $\overline G$, so each has at most $\binom{n}{\ell}\binom{u}{k-\ell}$ stable $k$-sets. By [L7], the stable $k$-sets of $\overline G$ are exactly the cliques of $G$. Since $k=2\ell$, $u=\lceil\delta n\rceil$, and step 4.1 gives $\delta n\ge1$, one has $u\le\delta n+1\le2\delta n$. Hence $G$ has at most

$$ 2\binom{n}{\ell}\binom{u}{k-\ell}\le2n^\ell u^{k-\ell}\le2^{\ell+1}\delta^\ell n^k $$

homogeneous $k$-vertex sets. [step 4.1, step 6.1, L6, L7, algebra]

7.2 Choose $X$ uniformly from $[V(G)]^{2t}$. Fix $H\in\mathcal F$ and put $h:=|V(H)|$. If $h>2t$, then no $2t$-element vertex set can contain the $h$-vertex image of an induced embedding of $H$, so $\operatorname{ind}_H(G[X])=0$ for every $X$. Suppose instead that $h\le2t$. Then step 6.2 gives $h\le2t<n$, so an induced embedding of $H$ into $G$ survives in $G[X]$ exactly when $X$ contains its $h$-vertex image, which happens with probability $$ \frac{\binom{n-h}{2t-h}}{\binom{n}{2t}} =\prod_{j=0}^{h-1}\frac{2t-j}{n-j} \le\left(\frac{2t}{n}\right)^h. $$ If $p_H$ denotes that survival probability, then $\mathbb E[\operatorname{ind}_H(G[X])]=\operatorname{ind}_H(G)\,p_H <(\delta n)^h(2t/n)^h=(2t\delta)^h$. So the same upper bound holds in both cases. [step 4.1, step 6.2, given, algebra]

8.1 Let $Y(X):=\sum_{H\in\mathcal F}\operatorname{ind}_H(G[X])$. Step 1.1 gives $|V(H)|\ge2$ for every $H\in\mathcal F$, and step 6.2 gives $2t\delta\le1/(16t)\le1$. Hence step 7.2 implies $\mathbb E[\operatorname{ind}_H(G[X])]< (2t\delta)^2$ for every $H\in\mathcal F$. By [L4], $\mathbb E[Y]<q(2t\delta)^2=4qt^2\delta^2\le t/2$. Applying [L5] and step 6.3, the graph $G$ has at least $\tfrac12(n/(2t))^k$ homogeneous $k$-vertex sets. [step 1.1, step 6.2, step 6.3, step 7.2, L4, L5]

8.2 Because $\epsilon<1/2$, step 4.1 gives $\ell=\lceil d\log(1/\epsilon)/\epsilon\rceil\ge2$. Using step 6.2 and step 7.1, we obtain

$$ 2^{\ell+1}\delta^\ell n^k\le\frac{2^{\ell+1}n^k}{(32t^2)^\ell} =\frac{n^k}{2^{4\ell-1}t^{2\ell}} \le\frac{n^k}{2^{2\ell+2}t^{2\ell}} =\frac{n^k}{4(2t)^k}. $$

This contradicts the lower bound $\tfrac12(n/(2t))^k=n^k/(2(2t)^k)$ from step 8.1. Therefore some $\epsilon$-restricted subset of $V(G)$ has size at least $\delta n=\epsilon^d n$. [step 4.1, step 6.2, step 7.1, step 8.1, algebra]

9.1 Since $\epsilon$ and the nonempty graph $G$ were arbitrary, the exponent $d$ from step 3.1 witnesses that $\mathcal F$ is viral. [step 8.2, L13] ∎

## Remarks

- The proof spends the Erdős–Hajnal hypothesis only through the exact-size $(t,k)$-homogeneous property established in step 6.3.
- The vacuous $K_0$ and $K_1$ cases are not cosmetic. Without step 1.1 the displayed viral inequalities would contain hidden empty-instance branches.

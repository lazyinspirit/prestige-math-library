---
id: thm-configuration-braid-pure-braid-short-exact-sequence
kind: theorem
title: 'The configuration braid short exact sequence $1\to PB_n\to B_n^{\mathrm{conf}}\to S_n\to 1$'
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-pure-braid-group-from-ordered-configurations,
       def-braid-group-from-unordered-configurations,
       def-endpoint-monodromy-of-a-configuration-loop,
       def-split-extension-of-groups,
       def-kernel-and-image-of-group-homomorphism,
       thm-image-subgroup-and-kernel-normal,
       def-generated-subgroup, def-symmetric-group,
       thm-adjacent-transpositions-generate-the-symmetric-group,
       thm-covering-maps-inject-fundamental-groups,
       def-induced-homomorphism-on-fundamental-groups,
       thm-induced-fundamental-group-map-functoriality,
       thm-ordered-configurations-cover-unordered-configurations-regularly,
       lem-the-closed-disk-is-a-manifold-with-boundary,
       prop-the-symmetric-group-acts-freely-on-ordered-configurations,
       def-unordered-configuration-space, def-ordered-configuration-space,
       thm-path-lifting-for-covering-maps,
       def-based-loops-and-fundamental-group,
       def-complex-numbers-and-arithmetic,
       def-complex-metric-convergence-and-continuity,
       lem-complex-conjugation-and-modulus-laws,
       lem-vector-operations-are-continuous-in-a-normed-space,
       def-group-homomorphism, def-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 2.1 equation (2.1), printed p. 11"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Allen Hatcher, Algebraic Topology, section 1.3, covering spaces and lifting, printed pp. 60-64"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $n\in\mathbb N$, let $q\in F_n(\operatorname{int}D^2)$ be the base
configuration used in [[def-pure-braid-group-from-ordered-configurations]] and
[[def-braid-group-from-unordered-configurations]] (for $n=0$ this is the empty
tuple, the unique point of $F_0(D^2)$), and let $p:F_n(D^2)\to C_n(D^2)$ be the
quotient map of [[def-unordered-configuration-space]]. Write
$$PB_n=\pi_1\big(F_n(D^2),q\big),\qquad B_n^{\mathrm{conf}}=\pi_1\big(C_n(D^2),[q]\big)$$
for the two configuration groups carried by the same $q$, and let
$\pi:B_n^{\mathrm{conf}}\to S_n$ be the endpoint monodromy of
[[def-endpoint-monodromy-of-a-configuration-loop]]: for a based loop $\alpha$ at
$[q]$ with lift $\widetilde\alpha$ starting at $q$, $\pi([\alpha])=\sigma_\alpha$
is the unique permutation with $\widetilde\alpha(1)=\sigma_\alpha\cdot q$. Then
the sequence of groups and homomorphisms
$$1\longrightarrow PB_n\mathrel{\mathop{\longrightarrow}^{p_*}}B_n^{\mathrm{conf}}\mathrel{\mathop{\longrightarrow}^{\pi}}S_n\longrightarrow1$$
is a short exact sequence in the sense of [[def-split-extension-of-groups]]:
the left arrow is the unique homomorphism from the one-element group $1$, the
middle arrow $p_*$ is induced by $p$ on fundamental groups, and
$$p_*\text{ is injective},\qquad \pi\text{ is surjective},\qquad \operatorname{im}p_*=\ker\pi .$$

This holds for every $n\ge0$, including $n=0$ and $n=1$ where $S_n$ is the
trivial group. The two groups use the same base configuration $q$ and the map
$p$ of [[def-unordered-configuration-space]], so the middle arrow is a map
between fundamental groups at $q$ and at its orbit $[q]$; no splitting of the
sequence is asserted, and neither $PB_n$ nor $B_n^{\mathrm{conf}}$ is here
identified with a presentation or with a group of strand diagrams.

## Facts & Assumptions

**Given:** A natural number $n$, the base configuration $q\in F_n(\operatorname{int}D^2)\subseteq F_n(D^2)$, the quotient map $p:F_n(D^2)\to C_n(D^2)$, the groups $PB_n$ and $B_n^{\mathrm{conf}}$ at $q$ and $[q]$, and the endpoint monodromy $\pi:B_n^{\mathrm{conf}}\to S_n$.

[F1] $PB_n=\pi_1(F_n(D^2),q)$ and $B_n^{\mathrm{conf}}=\pi_1(C_n(D^2),[q])$, both with the first-then-second loop product, and the labels $1,\dots,n$ are identified with $n=\{0,\dots,n-1\}$ by $\kappa(i)=i-1$; $F_0(D^2)$ and $C_0(D^2)$ are one-point spaces, and single-coordinate evaluation and the orbit map give canonical homeomorphisms $F_1(D^2)\cong D^2\cong C_1(D^2)$ ([[def-pure-braid-group-from-ordered-configurations]], [[def-braid-group-from-unordered-configurations]], [[def-ordered-configuration-space]], [[def-unordered-configuration-space]], [[def-based-loops-and-fundamental-group]]).

[F2] For a based loop $\alpha$ at $[q]$ with lift $\widetilde\alpha$ starting at $q$, one has $\widetilde\alpha(1)=\sigma_\alpha\cdot q$ for a unique $\sigma_\alpha\in S_n$, and $\pi([\alpha])=\sigma_\alpha$ defines a group homomorphism $\pi:B_n^{\mathrm{conf}}\to S_n$ ([[def-endpoint-monodromy-of-a-configuration-loop]], [[def-group-homomorphism]]).

[L3] $D^2$ is nonempty, connected, Hausdorff and a topological $2$-manifold with boundary, so [[thm-ordered-configurations-cover-unordered-configurations-regularly]] applies with $M=D^2$ and $d=2\ge2$: $p$ is a covering map, $F_n(D^2)$ and $C_n(D^2)$ are path-connected, and every fibre of $p$ has $n!$ elements ([[lem-the-closed-disk-is-a-manifold-with-boundary]], [[def-unordered-configuration-space]]).

[L4] For a covering and a path in the base, every point of the fibre over its initial point is the starting point of exactly one lift ([[thm-path-lifting-for-covering-maps]]).

[L5] The formula $(\sigma\cdot x)_i=x_{\sigma^{-1}(i-1)+1}$ defines a free continuous left action of $S_n$ on $F_n(X)$ by homeomorphisms, $p(\sigma\cdot x)=p(x)$ for $x\in F_n(D^2)$, and $p^{-1}([q])=S_n\cdot q$; in particular $\sigma\cdot q=q$ only for the identity $\sigma$ ([[prop-the-symmetric-group-acts-freely-on-ordered-configurations]], [[def-unordered-configuration-space]]).

[L6] $p_*$ is a well-defined group homomorphism $\pi_1(F_n(D^2),q)\to\pi_1(C_n(D^2),[q])$ with $p_*([\gamma])=[p\circ\gamma]$, and it is injective because $p$ is a covering map ([[def-induced-homomorphism-on-fundamental-groups]], [[thm-induced-fundamental-group-map-functoriality]], [[thm-covering-maps-inject-fundamental-groups]]).

[L7] A diagram $1\to N\to G\to H\to 1$ of groups and homomorphisms is a short exact sequence when the first map is injective, the last is surjective and the image of the first equals the kernel of the last ([[def-split-extension-of-groups]]); the image of a group homomorphism is a subgroup of its target, and a homomorphism is surjective exactly when its image is the whole target ([[def-kernel-and-image-of-group-homomorphism]], [[thm-image-subgroup-and-kernel-normal]]).

[L8] For a set $T\subseteq S_n$ the subgroup $\langle T\rangle$ is the smallest subgroup containing $T$, and $S_n$ is generated by the adjacent transpositions $s_j$, $1\le j<n$; for $n=0,1$ the empty set generates the trivial group $S_n$ ([[def-generated-subgroup]], [[thm-adjacent-transpositions-generate-the-symmetric-group]], [[def-symmetric-group]]).

[L9] Under the label identification of [F1], the adjacent transposition $s_j=(j\ j+1)$ exchanges the labels $j$ and $j+1$ and fixes the others, so that $s_j\cdot x$ is the tuple $x$ with its $j$-th and $(j+1)$-st entries exchanged ([[thm-adjacent-transpositions-generate-the-symmetric-group]], [[prop-the-symmetric-group-acts-freely-on-ordered-configurations]]).

[L10] Addition and multiplication of complex numbers and the affine maps $z\mapsto z+c$ and $z\mapsto\lambda z$ are continuous, and $|z+w|\le|z|+|w|$, $|\lambda z|=|\lambda|\,|z|$ ([[lem-vector-operations-are-continuous-in-a-normed-space]], [[def-complex-metric-convergence-and-continuity]], [[lem-complex-conjugation-and-modulus-laws]]).

[L11] If $X=\{x_0\}$ is a one-point space then every loop at $x_0$ has the constant value $x_0$, so $\pi_1(X,x_0)$ has exactly one element, the class of the constant loop ([[def-based-loops-and-fundamental-group]]).



## Proof

**Proof technique:** direct.

1.1 *The quotient is a covering and $p_*$ is injective.* By [L3] the map $p:F_n(D^2)\to C_n(D^2)$ is a covering map; by [L6] the induced map $p_*:\pi_1(F_n(D^2),q)\to\pi_1(C_n(D^2),[q])$, $p_*([\gamma])=[p\circ\gamma]$, is a well-defined group homomorphism and is injective. Under [F1] this is a homomorphism $p_*:PB_n\to B_n^{\mathrm{conf}}$. [F1, L3, L6]

1.2 *The kernel of $\pi$ lies in the image of $p_*$.* Let $[\alpha]\in B_n^{\mathrm{conf}}$ with $\pi([\alpha])=e$, and let $\widetilde\alpha$ be the lift of $\alpha$ starting at $q$; by the definition of $\pi$ in [F2] one has $\widetilde\alpha(1)=\sigma_\alpha\cdot q=\pi([\alpha])\cdot q=e\cdot q=q$. So $\widetilde\alpha$ is a loop at $q$ in $F_n(D^2)$, and [L6] gives $p_*[\widetilde\alpha]=[p\circ\widetilde\alpha]=[\alpha]$. Hence $\ker\pi\subseteq\operatorname{im}p_*$. [F2, L4, L6]

1.3 *A model configuration with explicit distances.* Assume $n\ge2$ and put $q'_j:=\frac{2j-n-1}{2n}$ for $1\le j\le n$, and for $1\le i<n$ put $u_i:=\frac{q'_i+q'_{i+1}}{2}=\frac{2i-n}{2n}$, $w:=\frac{1}{2n}$ and $\eta:=\frac{w}{2}$. Then $q'_{j+1}-q'_j=\frac{1}{n}$ and $|q'_j|\le\frac{n-1}{2n}<1$ for all $j$, so $q'=(q'_1,\dots,q'_n)\in F_n(\operatorname{int}D^2)$; moreover $q'_i=u_i-w$ and $q'_{i+1}=u_i+w$, and $|q'_j-u_i|=\frac{|2j-2i-1|}{2n}\ge3w$ for every $j\notin\{i,i+1\}$. [F1, L10, algebra]

2.1 *The first arrow is injective with image the kernel of $p_*$.* The left arrow is the unique homomorphism $1\to PB_n$ from the one-element group; its image consists of the identity $e_{PB_n}$ alone, so it is injective, and since $p_*$ is injective by step 1.1 its kernel is $\{e_{PB_n}\}$, which is exactly that image. [step 1.1, L7]

2.2 *The image of $p_*$ lies in the kernel of $\pi$.* Let $[\gamma]\in PB_n$ with $\gamma:I\to F_n(D^2)$ a loop at $q$; then $\alpha:=p\circ\gamma$ is a loop at $[q]$, since $p(\gamma(0))=[q]=p(\gamma(1))$. The path $\gamma$ satisfies $p\circ\gamma=\alpha$ and $\gamma(0)=q$, so by [L4] it is the unique lift of $\alpha$ starting at $q$. By [F2] the endpoint of that lift is $\sigma_\alpha\cdot q$ for the permutation $\pi([\alpha])=\sigma_\alpha$, that is $\sigma_\alpha\cdot q=\gamma(1)=q$; freeness of the action by [L5] gives $\sigma_\alpha=e$, so $\pi(p_*[\gamma])=\pi([\alpha])=e$. Hence $\operatorname{im}p_*\subseteq\ker\pi$. [step 1.1, F2, L4, L5]

2.3 *A swap move at the model configuration.* Assume $n\ge2$ and fix $i$ with $1\le i<n$, keeping the notation of step 1.3. Define paths $a_i,b_i:I\to\mathbb C$ by the two-part formulas $a_i(t)=u_i-w(1-2t)+2t\eta\,\mathrm{i}$ and $b_i(t)=u_i+w(1-2t)-2t\eta\,\mathrm{i}$ for $0\le t\le\frac12$, and $a_i(t)=u_i+w(2t-1)+2(1-t)\eta\,\mathrm{i}$ and $b_i(t)=u_i-w(2t-1)-2(1-t)\eta\,\mathrm{i}$ for $\frac12\le t\le1$, and let $x^{(i)}(t):=(x_1(t),\dots,x_n(t))$ be the tuple with $x_i(t):=a_i(t)$, $x_{i+1}(t):=b_i(t)$ and $x_j(t):=q'_j$ for $j\notin\{i,i+1\}$. The two parts of each formula agree at $t=\frac12$, so $a_i$ and $b_i$ are continuous by [L10], and $a_i(0)=q'_i$, $a_i(1)=q'_{i+1}$, $b_i(0)=q'_{i+1}$, $b_i(1)=q'_i$. [step 1.3, F1, L10]

3.1 *Exactness at $B_n^{\mathrm{conf}}$.* Steps 2.2 and 1.2 together give $\operatorname{im}p_*=\ker\pi$. [step 2.2, step 1.2]

3.2 *The tuples $x^{(i)}(t)$ are collision-free.* With the notation of step 2.3, one has $\operatorname{Im}a_i(t)=2t\eta\ge0$ for $0\le t\le\frac12$ and $\operatorname{Im}a_i(t)=2(1-t)\eta\ge0$ for $\frac12\le t\le1$, while $\operatorname{Im}b_i(t)=-2t\eta\le0$ and $\operatorname{Im}b_i(t)=-2(1-t)\eta\le0$ on the same intervals; equality holds only at $t=0$ and $t=1$, where $a_i(0)=q'_i\neq q'_{i+1}=b_i(0)$ and $a_i(1)=q'_{i+1}\neq q'_i=b_i(1)$ by step 1.3. Hence $a_i(t)\neq b_i(t)$ for every $t$. For $j\notin\{i,i+1\}$ one has $|\operatorname{Re}a_i(t)-u_i|\le w$ and $\operatorname{Re}q'_j-u_i$ real with $|\operatorname{Re}q'_j-u_i|=|q'_j-u_i|\ge3w$ by step 1.3, so $a_i(t)\neq q'_j$, and the same argument gives $b_i(t)\neq q'_j$; finally $|a_i(t)|\le|u_i|+w+\eta\le\frac{n-2}{2n}+\frac{1}{2n}+\frac{1}{4n}<1$ and likewise for $b_i$, while $|q'_j|<1$, so every coordinate lies in $\operatorname{int}D^2$. Thus $x^{(i)}(t)\in F_n(\operatorname{int}D^2)$ for every $t$. [step 1.3, step 2.3, L10, algebra]

4.1 *A loop at $[q]$ with monodromy $s_i$.* Assume $n\ge2$ and fix $i$. By step 3.2 the formula $\beta_i:=p\circ x^{(i)}$ defines a continuous loop in $C_n(D^2)$ at $[q']$, because $x^{(i)}(0)=q'$ and $x^{(i)}(1)=s_i\cdot q'$ is the tuple $q'$ with its $i$-th and $(i+1)$-st entries exchanged by [L9], whence $p(x^{(i)}(1))=[s_i\cdot q']=[q']$ by [L5]. By [L3] $F_n(D^2)$ is path-connected, so there is a path $\gamma:I\to F_n(D^2)$ with $\gamma(0)=q$ and $\gamma(1)=q'$; define $\alpha_i:I\to C_n(D^2)$ by $\alpha_i(t):=(p\circ\gamma)(3t)$ for $0\le t\le\frac13$, $\alpha_i(t):=\beta_i(3t-1)$ for $\frac13\le t\le\frac23$ and $\alpha_i(t):=(p\circ\gamma)(3-3t)$ for $\frac23\le t\le1$. Then $\alpha_i$ is a loop at $[q]$, and the path $\widetilde\alpha_i$ given by $\widetilde\alpha_i(t):=\gamma(3t)$, $\widetilde\alpha_i(t):=x^{(i)}(3t-1)$, $\widetilde\alpha_i(t):=s_i\cdot\gamma(3-3t)$ on the same three intervals is a lift of $\alpha_i$ starting at $q$: it is continuous, takes values in $F_n(D^2)$ by [L5], and $p(\widetilde\alpha_i(t))=\alpha_i(t)$ on each piece, since $p(s_i\cdot y)=p(y)$. By [L4] it is the lift of $\alpha_i$ starting at $q$, so its endpoint is $\widetilde\alpha_i(1)=s_i\cdot\gamma(0)=s_i\cdot q$, and therefore $\pi([\alpha_i])=s_i$ by [F2]. [step 1.3, step 3.2, F2, L3, L4, L5, L9]

5.1 *The endpoint monodromy is surjective.* Let $n\ge2$ and let $T:=\{s_1,\dots,s_{n-1}\}\subseteq S_n$. Step 4.1 exhibits for each $s_j\in T$ a class in $B_n^{\mathrm{conf}}$ with $\pi$-image $s_j$, so $T\subseteq\operatorname{im}\pi$, and $\operatorname{im}\pi$ is a subgroup of $S_n$ by [L7]; since $\langle T\rangle$ is the smallest subgroup containing $T$ by [L8], it follows that $S_n=\langle T\rangle\subseteq\operatorname{im}\pi$, so $\operatorname{im}\pi=S_n$ and $\pi$ is surjective by [L7]. For $n=0,1$ the group $S_n$ is trivial by [L8], so $\pi$ is surjective there as well, its image being a subgroup of a one-element group. Hence $\pi$ is surjective for every $n\ge0$. [step 4.1, L7, L8]

6.1 *Conclusion.* Step 1.1 shows that $p_*$ is an injective homomorphism $PB_n\to B_n^{\mathrm{conf}}$, step 2.1 that the left arrow from the one-element group is injective with image $\ker p_*$, step 3.1 that $\operatorname{im}p_*=\ker\pi$, and step 5.1 that $\pi$ is surjective. By the definition of a short exact sequence in [L7], the displayed sequence is short exact for every $n\ge0$, including the one-point cases $n=0$, where $F_0(D^2)$ and $C_0(D^2)$ are one-point spaces so that $PB_0$ and $B_0^{\mathrm{conf}}$ are one-element groups by [F1] and [L11]. [step 1.1, step 2.1, step 3.1, step 5.1, F1, L7, L11] ∎

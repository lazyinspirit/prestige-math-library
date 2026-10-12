---
id: thm-henon-coded-invariant-set-is-conjugate-to-shift
kind: theorem
title: "The quadratic map $F(x,y)=(y,y^2-a-x)$ has a compact coded invariant set on which it is topologically conjugate to the two-sign shift and chaotic"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 6
deps: [def-bilateral-symbol-and-bounded-sequence-space, lem-bounded-bilateral-sequence-ball-is-complete, lem-coded-quadratic-recurrence-is-a-contraction, lem-symbol-locality-gives-coding-continuity, def-cm-topologically-mixing-dense-periodic-and-sensitive-maps, thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive, def-cm-bilateral-shift-space-and-cylinders, lem-cm-bilateral-shift-metric-and-sequential-compactness, def-metric-continuity, def-metric-convergence, def-metric-compactness-variants, def-metric-compactness, thm-metric-sequential-closure, thm-continuous-image-of-a-compact-space-is-compact, lem-metric-limits-unique, def-metric-topology, def-dense-top, def-metric-space, def-countable-choice, def-dependent-choice]
dependency_roles:
  def-bilateral-symbol-and-bounded-sequence-space: mathematical-premise
  lem-bounded-bilateral-sequence-ball-is-complete: mathematical-premise
  lem-coded-quadratic-recurrence-is-a-contraction: mathematical-premise
  lem-symbol-locality-gives-coding-continuity: mathematical-premise
  def-cm-topologically-mixing-dense-periodic-and-sensitive-maps: mathematical-premise
  thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive: mathematical-premise
  def-cm-bilateral-shift-space-and-cylinders: mathematical-premise
  lem-cm-bilateral-shift-metric-and-sequential-compactness: mathematical-premise
  def-metric-continuity: mathematical-premise
  def-metric-convergence: mathematical-premise
  def-metric-compactness-variants: mathematical-premise
  def-metric-compactness: mathematical-premise
  thm-metric-sequential-closure: mathematical-premise
  thm-continuous-image-of-a-compact-space-is-compact: mathematical-premise
  lem-metric-limits-unique: mathematical-premise
  def-metric-topology: mathematical-premise
  def-dense-top: mathematical-premise
  def-metric-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Theorem 11.5 and Section 13.1, conjugacy of a horseshoe invariant set with the two-sided shift"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "P. Cvitanović, R. Artuso, R. Mainieri, G. Tanner, G. Vattay, Chaos: Classical and Quantum (ChaosBook.org, edition 17.6.8, complete PDF), Chapter 15 Sections 15.2-15.3, the complete Smale horseshoe and its binary symbolic dynamics"
      url: "https://chaosbook.org/chapters/ChaosBook.pdf"
    - title: "R. Devaney and Z. Nitecki, Shift automorphisms in the Hénon mapping, Communications in Mathematical Physics 67 (1979) 137-146, the invariant set of the quadratic map is conjugate to the shift for large parameters"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-67/issue-2/Shift-automorphisms-in-the-H%C3%A9non-mapping/cmp/1103905161.pdf"
verification:
  precheck: pass
---

## Statement

Fix $a\ge100$, let $R=\sqrt a+3$, $L=\sqrt{a-2R}$, let $X_\pm$ and $S_\pm$ be the two-sign bilateral shift space and its shift ([[def-bilateral-symbol-and-bounded-sequence-space]]), let $x(s)\in B_R$ be the coded sequence of [[lem-coded-quadratic-recurrence-is-a-contraction]], let

$$F(x,y):=(y,\;y^2-a-x),\qquad h(s):=\bigl(x_{-1}(s),\,x_0(s)\bigr)\qquad(s\in X_\pm),$$

and put $\Lambda:=h(X_\pm)\subseteq\mathbb R^2$. Then:

1. $F\circ h=h\circ S_\pm$, i.e. $F(h(s))=h(S_\pm s)$ for every $s\in X_\pm$, and $\Lambda$ is invariant: $F(\Lambda)=\Lambda$;
2. $h$ is a continuous bijection of $(X_\pm,D_\pm)$ onto $\Lambda$; it is a homeomorphism onto $\Lambda$ with the Euclidean metric ([[def-metric-continuity]]) once the Axiom of Countable Choice is granted, since the proof uses $\mathrm{AC}_\omega$ exactly once, through the equivalence between closed and sequentially closed subsets of $\mathbb R^2$ ([[thm-metric-sequential-closure]]);
3. $\Lambda$ is sequentially compact ([[def-metric-compactness-variants]]) and, granting the Axioms of Countable and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]), compact ([[def-metric-compactness]]) and a continuous image of the compact space $X_\pm$ ([[thm-continuous-image-of-a-compact-space-is-compact]]);
4. $F|_\Lambda:\Lambda\to\Lambda$ is continuous, topologically mixing, has dense periodic points, and has sensitive dependence on initial conditions with sensitivity constant $2L$; hence $F|_\Lambda$ is chaotic in the stated sense ([[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]]).

## Facts & Assumptions

**Given:** The parameter $a\ge100$, the constants $R,L$, the shift space $X_\pm$ with its shift $S_\pm$ and metric $D_\pm$, the maps $T_s$, $x(s)$, $F$ and $h$ of [[def-bilateral-symbol-and-bounded-sequence-space]], [[lem-coded-quadratic-recurrence-is-a-contraction]] and [[lem-symbol-locality-gives-coding-continuity]], and $\Lambda=h(X_\pm)$.

[F1] Fixed point and coding data ([[lem-coded-quadratic-recurrence-is-a-contraction]], [[lem-symbol-locality-gives-coding-continuity]]): $T_s(B_R)\subseteq B_R$, $T_sx(s)=x(s)$, $\operatorname{sign}x_n(s)=s_n$, $|x_n(s)|\ge L$, $x_{n+1}(s)=x_n(s)^2-a-x_{n-1}(s)$; $F$ is a bijection with $F^{-1}(x,y)=(x^2-a-y,x)$ and $F(x_{n-1}(s),x_n(s))=(x_n(s),x_{n+1}(s))$; $h$ is continuous and injective; and $D_\pm(s,t)=d_2(\varphi(s),\varphi(t))$ with $\varphi$ a bijective isometry onto the published two-symbol space $X_2$ ([[lem-bounded-bilateral-sequence-ball-is-complete]], clause 3).

[F2] The published shift data ([[def-cm-bilateral-shift-space-and-cylinders]], [[lem-cm-bilateral-shift-metric-and-sequential-compactness]], [[thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive]]): the two-symbol shift $\sigma_2$ on $X_2$ is continuous, topologically mixing, has dense periodic points and is sensitive with constant $1$; $X_2$ is sequentially compact, with the diagonal construction using no choice principle, and compact under the Axioms of Countable and Dependent Choice.

[F3] Topological vocabulary ([[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]], [[def-dense-top]], [[def-metric-continuity]], [[def-metric-topology]], [[def-metric-convergence]], [[def-metric-compactness-variants]]): the definitions of topological mixing, periodic points and their density, sensitivity, sequential compactness, continuity and open sets, and the fact that the closed subsets of a metric space are the complements of the open sets.

[F4] Sequential closure ([[thm-metric-sequential-closure]], [[lem-metric-limits-unique]], [[def-metric-convergence]]): a subset $A$ of a metric space is closed if and only if it is sequentially closed, i.e. contains the limit of every convergent sequence with values in $A$; the implication "sequentially closed $\Rightarrow$ closed" is the direction proved from the Axiom of Countable Choice, while the converse direction is choice-free, and limits of convergent sequences in a metric space are unique.

[F5] Choice scope ([[def-countable-choice]], [[def-dependent-choice]], [[def-metric-compactness]]): $\mathrm{AC}_\omega$ is used once, in step 3.1, through the sequential-closure direction of [F4]; the compactness statements of clauses 3 and 4 use $\mathrm{AC}_\omega+\mathrm{DC}$, and only through the published compactness of $X_2$ and the general fact that continuous images of compact spaces are compact.



## Proof

**Proof technique:** direct; prove the conjugacy identity by uniqueness of the fixed point, then transfer compactness and the chaos properties through the coding homeomorphism and exhibit sensitivity by flipping a distant symbol.

1.1 Shift invariance of the code: fix $s\in X_\pm$ and define $y_n:=x_{n+1}(s)$ for $n\in\mathbb Z$. Then, using $T_{S_\pm s}$ and [F1], $$\bigl(T_{S_\pm s}y\bigr)_n=(S_\pm s)_n\sqrt{a+y_{n-1}+y_{n+1}}=s_{n+1}\sqrt{a+x_n(s)+x_{n+2}(s)}=\bigl(T_sx(s)\bigr)_{n+1}=x_{n+1}(s)=y_n ;$$ thus $y$ is a fixed point of $T_{S_\pm s}$ in $B_R$, and by the uniqueness clause of [F1] (via [[lem-coded-quadratic-recurrence-is-a-contraction]]) $y=x(S_\pm s)$, i.e. $x_n(S_\pm s)=x_{n+1}(s)$ for all $n$. [given, F1, algebra]

1.2 $F|_\Lambda$ is continuous: $F$ has polynomial components, hence is continuous on $\mathbb R^2$, and a restriction of a continuous map is continuous ([[def-metric-continuity]]). [given, F3]

2.1 Conjugacy identity: for $s\in X_\pm$, [F1] and step 1.1 give $F(h(s))=F(x_{-1}(s),x_0(s))=(x_0(s),x_1(s))=(x_{-1}(S_\pm s),x_0(S_\pm s))=h(S_\pm s)$. Hence $F(h(X_\pm))\subseteq h(X_\pm)$, and since $S_\pm$ is onto, for every $h(s)\in h(X_\pm)$ the identity applied to $S_\pm^{-1}s$ gives $h(s)=F(h(S_\pm^{-1}s))\in F(h(X_\pm))$; therefore $F(\Lambda)=\Lambda$. [step 1.1, F1]

3.1 $h$ is a homeomorphism: $h$ is a continuous bijection of $X_\pm$ onto $\Lambda$ by [F1]. To prove that $h^{-1}$ is continuous it suffices to prove that $h$ maps closed subsets of $X_\pm$ to closed subsets of $\mathbb R^2$. Let $C\subseteq X_\pm$ be closed. Then $C$ is sequentially compact: a sequence in $C$ has a subsequence converging in the sequentially compact space $X_\pm$ ([F2] and the isometry $\varphi$ of [F1]), and the limit lies in $C$ because $C$ is closed and therefore sequentially closed by the choice-free direction of [F4]. The continuous image $h(C)$ is sequentially compact: given a sequence $(h(x_k))$ with $x_k\in C$, pick a subsequence $x_{k_j}$ converging to some $x\in C$, then $h(x_{k_j})\to h(x)\in h(C)$ by continuity ([[def-metric-compactness-variants]], [[def-metric-continuity]]); no choice is used beyond the single subsequence selection that sequential compactness of $C$ provides. Moreover $h(C)$ is sequentially closed: if a sequence in $h(C)$ converges, then some subsequence converges to a point of $h(C)$ by the previous paragraph (with that sequence in place of the given one), and the whole sequence has the same limit by uniqueness of limits ([F4]); hence the limit lies in $h(C)$. By the $\mathrm{AC}_\omega$ direction of [F4] the sequentially closed set $h(C)$ is closed in $\mathbb R^2$. Thus $h$ is a closed map, so $h^{-1}$ is continuous and $h$ is a homeomorphism. [given, step 2.1, F1, F2, F3, F4]

3.2 Sensitivity: let $z=h(s)\in\Lambda$ and $\varepsilon>0$; choose $m\ge0$ with $4\sqrt2\,RL^{-m}<\varepsilon$ and let $k\ge m+1$. Define $t\in X_\pm$ by $t_k:=-s_k$ and $t_j:=s_j$ for $j\ne k$. Then $s,t$ agree for all $|j|\le m$, so by the coding-continuity clause of [F1] ([[lem-symbol-locality-gives-coding-continuity]]) one has $\|h(s)-h(t)\|_2\le4\sqrt2\,RL^{-m}<\varepsilon$. On the other hand $S_\pm^k s$ and $S_\pm^k t$ differ exactly at coordinate $0$, so their signs at $0$ are opposite; by [F1], $\bigl|x_0(S_\pm^k s)-x_0(S_\pm^k t)\bigr|\ge|x_0(S_\pm^k s)|+|x_0(S_\pm^k t)|\ge2L$. Using step 2.1, $F^k(z)=F^k(h(s))=h(S_\pm^ks)$ and $F^k(h(t))=h(S_\pm^kt)$, so $\bigl\|F^k(z)-F^k(h(t))\bigr\|_2\ge\bigl|x_0(S_\pm^ks)-x_0(S_\pm^kt)\bigr|\ge2L$. Thus $2L$ is a sensitivity constant. [given, step 2.1, F1, F3, algebra]

4.1 $\Lambda$ is sequentially compact: $X_2$ is sequentially compact without choice ([F2]); since $\varphi:X_\pm\to X_2$ is a bijective isometry ([F1]), a sequence in $X_\pm$ is carried to a sequence in $X_2$ with a convergent subsequence whose preimage under $\varphi$ converges in $X_\pm$ to the corresponding preimage limit; hence $X_\pm$ is sequentially compact. Applying the continuous-image argument of step 3.1 with $C=X_\pm$ shows that $\Lambda=h(X_\pm)$ is sequentially compact. [given, step 3.1, F1, F2, F3]

4.2 $\Lambda$ is compact under $\mathrm{AC}_\omega+\mathrm{DC}$ [F5]: $X_2$ is compact by [F2]; since $\varphi$ is a bijective isometry, a set $U\subseteq X_\pm$ is open exactly when $\varphi(U)\subseteq X_2$ is open, so the images under $\varphi$ of an open cover of $X_\pm$ form an open cover of $X_2$, whose finite subcover pulls back to a finite subcover of the original cover; hence $X_\pm$ is compact. A continuous image of a compact space is compact by [[thm-continuous-image-of-a-compact-space-is-compact]], so $\Lambda=h(X_\pm)$ is compact. [step 2.1, step 3.1, F2, F3, F5]

4.3 Topological mixing of $F|_\Lambda$: let $U,V\subseteq\Lambda$ be nonempty and open in $\Lambda$; then $h^{-1}(U)$ and $h^{-1}(V)$ are nonempty open subsets of $X_\pm$ (step 3.1). Since $S_\pm$ is topologically mixing ([F2], transferred through the isometry $\varphi$ of [F1] and the conjugacy $S_\pm=\varphi^{-1}\circ\sigma_2\circ\varphi$), there is $N$ with $S_\pm^n\bigl(h^{-1}(U)\bigr)\cap h^{-1}(V)\ne\emptyset$ for every $n\ge N$; applying $h$ and step 2.1, $F^n(U)\cap V=h\Bigl(S_\pm^n\bigl(h^{-1}(U)\bigr)\cap h^{-1}(V)\Bigr)\ne\emptyset$ for every $n\ge N$. [given, step 2.1, step 3.1, F1, F2, F3]

4.4 Dense periodic points: a point $s$ is periodic for $S_\pm$ if and only if $h(s)$ is periodic for $F|_\Lambda$, by the conjugacy of step 2.1 and the injectivity of $h$ ([F1]). Since $h$ is a bijection carrying the topology of $X_\pm$ onto that of $\Lambda$ (steps 2.1, 3.1 and [[def-dense-top]]), it maps the dense set of periodic points of $S_\pm$ ([F2]) to a dense subset of $\Lambda$ consisting of periodic points of $F|_\Lambda$. [step 2.1, step 3.1, F1, F2, F3]

5.1 Conclusion: by steps 1.2, 4.3, 4.4 and 3.2, the restriction $F|_\Lambda$ is continuous, topologically mixing, has dense periodic points and is sensitive with constant $2L$; by the definition of [[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]] it is chaotic in the stated sense, and clauses 1-4 are proved. [step 2.1, step 1.2, step 3.1, step 4.1, step 4.2, step 4.3, step 4.4, step 3.2, F3] ∎


## Remarks

- The proof is choice-free except for clause 3's compactness statement, which is explicitly routed through the published compactness of $X_2$ under the Axioms of Countable and Dependent Choice; every other conclusion uses only sequential compactness, continuity and the metric axioms.

- Sensitivity is proved by an explicit far-symbol flip, so no compactness or uniform continuity of $h^{-1}$ is needed. The constant $2L$ is not claimed to be optimal.

- Clause 1 identifies $\Lambda$ as an invariant set of the polynomial map $F$; no claim is made that $\Lambda$ is an attractor, has full measure, or exhausts the non-wandering set of $F$.

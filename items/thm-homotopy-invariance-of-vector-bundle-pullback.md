---
id: thm-homotopy-invariance-of-vector-bundle-pullback
kind: theorem
title: Homotopy invariance of vector-bundle pullback
status: draft
origin: pipeline
deps: [def-pullback-vector-bundle-and-pullback-section, thm-subordinate-partitions-of-unity-exist, lem-ac-supplies-dependent-choice-for-vector-bundle-constructions, thm-principal-bundles-are-classified-by-maps-to-bg, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Theorem 1.6 and Proposition 1.7"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Complete endpoint-transport proof, printed pp.20–21; countable cover in Lemma 1.21, pp.36–37"
    - title: "MIT 18.906 notes, Lecture 17"
      url: https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Homotopy invariance, printed pp.55–57"
---

## Statement

Assume AC. Let $X$ be paracompact Hausdorff and let
$H:X\times I\to Y$ be a homotopy from $f_0$ to $f_1$. For every numerable
finite-rank real or complex vector bundle $E\to Y$, the endpoint pullbacks
$f_0^*E$ and $f_1^*E$ are isomorphic. Equivalently, the restrictions of
$H^*E$ to $X\times\{0\}$ and $X\times\{1\}$ are isomorphic. No canonical
endpoint isomorphism is asserted.

## Facts & Assumptions

**Given:** AC, $X,H,E$ as in the statement, and $\xi=H^*E\to X\times I$.

[F1] Pullback charts make $\xi$ a vector bundle, and its endpoint
restrictions are $f_0^*E$ and $f_1^*E$
([[def-pullback-vector-bundle-and-pullback-section]]).

[F2] Under AC and DC a paracompact Hausdorff open cover admits a subordinate
locally finite partition ([[thm-subordinate-partitions-of-unity-exist]]).

[F3] The countabilization in the proof of
[[thm-principal-bundles-are-classified-by-maps-to-bg]] turns an arbitrary
numeration into a countable partition $(\lambda_m)$ such that each cozero
set is a disjoint union of open pieces subordinate to the original cover.

[A1] AC is the stated principle and implies DC
([[def-axiom-of-choice]],
[[lem-ac-supplies-dependent-choice-for-vector-bundle-constructions]]).

## Proof

**Proof technique:** direct.

1.1 For each $x\in X$, compactness of $I$ gives a partition $0=t_0<\cdots<t_r=1$ and neighborhoods $U_{x,j}$ of $x$ such that $\xi$ is trivial on $U_{x,j}\times[t_{j-1},t_j]$. After shrinking to $U_x=\bigcap_jU_{x,j}$, modify each later strip trivialization by its transition matrix at the common endpoint; consecutive trivializations then agree there and paste. Thus $\xi|_{U_x\times I}$ is trivial. [F1, construct]

2.1 Apply [A1] and [F2] to the cover $(U_x)$. Apply the countabilization [F3] to obtain a countable open cover $(V_m)$ and a locally finite partition $(\lambda_m)$ with $\operatorname{supp}\lambda_m\subseteq V_m$, where each $V_m$ is a disjoint union of open sets contained in members of the original cover. Pasting the corresponding trivializations over those disjoint pieces makes $\xi|_{V_m\times I}$ trivial. [F2, F3, A1, step 1.1, choose]

3.1 Put $\psi_0=0$, $\psi_m=\sum_{j\leq m}\lambda_j$, and let $X_m\subseteq X\times I$ be the graph of $\psi_m$. Over $V_m\times I$, its chosen trivialization transports a vector vertically from $(x,\psi_m(x))$ to $(x,\psi_{m-1}(x))$. Outside $\operatorname{supp}\lambda_m$ the two graph points agree, so extending by the identity gives a continuous bundle isomorphism $h_m:\xi|_{X_m}\to\xi|_{X_{m-1}}$. [step 2.1, construct]

4.1 Near any $x$, choose $M$ so every $\lambda_m$ with $m>M$ vanishes there. On that neighborhood $\psi_M=1$, and $h_1\circ\cdots\circ h_M$ carries the restriction over the graph of $1$ to the graph of $0$. Enlarging $M$ does not change this map locally because the added $h_m$ are identities. These local formulas therefore define a continuous fiberwise-linear isomorphism $\xi|_{X\times\{1\}}\to\xi|_{X\times\{0\}}$. Reversing the finite local composites gives its continuous inverse. [step 3.1]

5.1 By [F1] the two endpoint restrictions are precisely $f_1^*E$ and $f_0^*E$, so step 4.1 proves the assertion. AC was used in step 2.1 to supply DC and countabilize the arbitrary partition; the finite strip constructions are choice-free once their data are supplied. Different partitions and charts can give different endpoint maps, which is why no canonical isomorphism is claimed. [F1, A1, step 2.1, step 4.1] ∎

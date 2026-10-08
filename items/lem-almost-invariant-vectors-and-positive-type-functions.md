---
status: draft
id: lem-almost-invariant-vectors-and-positive-type-functions
kind: lemma
title: Almost invariant vectors and normalized positive type functions
deps:
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-matrix-coefficient-of-a-unitary-representation
  - def-continuous-function-of-positive-type
  - lem-diagonal-unitary-coefficients-have-positive-type
  - thm-gns-construction-for-topological-groups
  - def-hilbert-direct-sum-of-unitary-representations
  - def-strongly-continuous-unitary-representation
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-compact-space
  - def-topological-group
  - def-hilbert-space
  - def-directed-set-and-net
  - def-net-convergence-and-cluster-point
  - def-net-eventually-and-frequently
  - def-axiom-of-choice
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC. It selects one almost-invariant unit-vector witness for each compact-set/tolerance pair and is also inherited by the GNS-completion and arbitrary Hilbert direct-sum suppliers. The coefficient estimates and the reverse implication from a given net are choice-free."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T), Cambridge University Press 2008; author-hosted complete text"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Definition 1.1.1, printed p. 32; Appendix C, Theorem C.4.10 and its complete proof, printed pp. 376–377 (GNS). The coefficient/displacement estimates and net construction are proved locally."
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Lecture 2, §II, printed pp. 3–4/PDF pp. 10–11: countable discrete-group formulation, as supplementary context."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G$ be a topological
group and $(\pi,H)$ a strongly continuous unitary representation of $G$
([[def-strongly-continuous-unitary-representation]],
[[def-hilbert-space]]). Then $\pi$ has almost invariant vectors
([[def-almost-invariant-vectors-for-a-unitary-representation]]) if and only
if there is a net $(\xi_i)_{i\in I}$, indexed by a directed set
([[def-directed-set-and-net]]), of unit vectors in $H$ whose normalized
positive type coefficient functions
$\varphi_i(g):=\langle\pi(g)\xi_i,\xi_i\rangle$
([[def-matrix-coefficient-of-a-unitary-representation]],
[[def-continuous-function-of-positive-type]]) converge to $1$ uniformly on
compact subsets. Here this uniform convergence means that for every compact
$Q\subseteq G$ and every $\eta>0$ there is $i_0\in I$ such that
$|\varphi_i(x)-1|<\eta$ for all $i\ge i_0$ and all $x\in Q$.

More generally, if a net, indexed by a directed set, of unit vectors in $H$ is eventually
$(Q,\varepsilon)$-invariant for every compact $Q$ and every $\varepsilon>0$,
then its coefficient net converges to $1$ uniformly on compact subsets. If
$(\varphi_i)_{i\in I}$ is a net, indexed by a directed set, of normalized
continuous positive type functions ([[def-continuous-function-of-positive-type]])
converging to $1$ uniformly on compact subsets, let
$(\pi_{\varphi_i},H_{\varphi_i},\xi_{\varphi_i})$ be their GNS triples
([[thm-gns-construction-for-topological-groups]]). Then the cyclic vectors
$\xi_{\varphi_i}$ are eventually $(Q,\varepsilon)$-invariant for every
compact $Q$ and every $\varepsilon>0$, and the Hilbert direct sum
$\widehat{\bigoplus}_{i\in I}\pi_{\varphi_i}$
([[def-hilbert-direct-sum-of-unitary-representations]]) has almost invariant
vectors. No claim is made that an individual $\pi_{\varphi_i}$ has almost
invariant vectors.

## Facts & Assumptions

**Given:** AC; a topological group $G$; a strongly continuous unitary representation $(\pi,H)$; and the coefficient convention that the inner product is linear in its first argument.

[F1] Almost invariance tests every compact $Q$ and every positive $\varepsilon$, using a unit vector; the zero representation has no almost invariant vectors because it has no unit vectors. Strong continuity means every orbit map $x\mapsto\pi(x)\xi$ is norm-continuous ([[def-almost-invariant-vectors-for-a-unitary-representation]], [[def-strongly-continuous-unitary-representation]]).

[F2] The diagonal coefficient $g\mapsto\langle\pi(g)\xi,\xi\rangle$ is continuous and of positive type, and its value at $e$ is $\|\xi\|^2$ ([[def-matrix-coefficient-of-a-unitary-representation]], [[lem-diagonal-unitary-coefficients-have-positive-type]]).

[F3] Cauchy–Schwarz holds in the Hilbert space; with the first-variable-linear convention, $1-\langle\pi(g)\xi,\xi\rangle=\langle\xi-\pi(g)\xi,\xi\rangle$ ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-matrix-coefficient-of-a-unitary-representation]]).

[F4] A net is a function from a directed preorder, and it converges when it is eventually in each neighborhood of its limit ([[def-directed-set-and-net]], [[def-net-convergence-and-cluster-point]], [[def-net-eventually-and-frequently]]).

[F5] A finite union of compact subsets is compact: an open cover restricts to each compact set, and the union of the resulting finite subcovers is finite ([[def-compact-space]]).

[F6] Under AC, a continuous positive type function has a strongly continuous cyclic GNS triple with coefficient $\varphi$ and $\|\xi_\varphi\|^2=\varphi(e)$ ([[thm-gns-construction-for-topological-groups]]).

[F7] Under AC, a family of strongly continuous unitary representations has a strongly continuous Hilbert direct sum, and each coordinate embedding is an isometry intertwining the coordinate representation ([[def-hilbert-direct-sum-of-unitary-representations]]).

[F8] AC means every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** coefficient/displacement identities and a directed net of witnesses.

1.1 Let $\xi$ be a unit vector and put $\varphi(g)=\langle\pi(g)\xi,\xi\rangle$. Unitarity and expansion of the squared norm give $\|\pi(g)\xi-\xi\|^2=2(1-\operatorname{Re}\varphi(g))$, while [F3] gives $|1-\varphi(g)|\le\|\pi(g)\xi-\xi\|$. By [F2], $\varphi$ is a normalized continuous function of positive type. [F2, F3, algebra]

1.2 If $\pi$ has almost invariant vectors, let $I=\{(Q,\varepsilon):Q\subseteq G\text{ compact},\ \varepsilon>0\}$ and order it by $(Q,\varepsilon)\preceq(Q',\varepsilon')$ when $Q\subseteq Q'$ and $\varepsilon'\le\varepsilon$. The index set is nonempty because $\varnothing$ is compact. It is directed: for two indices, $Q\cup Q'$ is compact by [F5] and $\min(\varepsilon,\varepsilon')>0$, so $(Q\cup Q',\min(\varepsilon,\varepsilon'))$ is a common upper bound. [F4, F5]

2.1 For every $i=(Q,\varepsilon)\in I$, the witness set of unit vectors that are $(Q,\varepsilon)$-invariant is nonempty by almost invariance. By AC [F8], choose one witness $\xi_i$ for each index. For any compact $K$ and $\eta>0$, set $i_0=(K,\eta/2)$. If $i=(Q,\varepsilon)\succeq i_0$, then $K\subseteq Q$ and $\varepsilon\le\eta/2$, so for every $x\in K$, [F3] gives $|1-\varphi_i(x)|\le\|\pi(x)\xi_i-\xi_i\|<\varepsilon\le\eta/2<\eta$. Thus the coefficient net converges to $1$ uniformly on compact subsets. [F1, F3, F4, F8, step 1.2]

2.2 Conversely, suppose the coefficient net of unit vectors $\xi_i$ converges to $1$ uniformly on compact subsets. Fix compact $Q$ and $\varepsilon>0$. Uniform convergence with tolerance $\varepsilon^2/2$ gives an index $i_0$ such that $|1-\varphi_i(x)|<\varepsilon^2/2$ for every $i\succeq i_0$ and $x\in Q$. The identity in step 1.1 yields $\|\pi(x)\xi_i-\xi_i\|^2=2(1-\operatorname{Re}\varphi_i(x))\le2|1-\varphi_i(x)|<\varepsilon^2$, so each such $\xi_i$ is $(Q,\varepsilon)$-invariant. Taking $\xi_{i_0}$ supplies a witness for each given compact set and tolerance; hence $\pi$ has almost invariant vectors. [F1, step 1.1]

3.1 The estimate in step 2.1 used only eventual $(Q,\varepsilon)$-invariance, not how the net was obtained. Therefore the coefficient net of any net of almost-invariant unit vectors also converges to $1$ uniformly on compact subsets. [F3, step 2.1]

3.2 For the GNS assertion, each normalized $\varphi_i$ has $\varphi_i(e)=1$, so [F6] gives a cyclic GNS triple with $\|\xi_{\varphi_i}\|=1$ and coefficient $\varphi_i$. Applying step 2.2's displacement estimate to the coefficient convergence shows that for each compact $Q$ and $\varepsilon>0$, some $i_0$ has every $\xi_{\varphi_i}$ $(Q,\varepsilon)$-invariant for all $i\succeq i_0$. [F2, F6, step 2.2]

4.1 Embed $\xi_{\varphi_{i_0}}$ as the vector supported in the $i_0$ coordinate of $\widehat{\bigoplus}_{i\in I}H_{\varphi_i}$. By [F7] this is a unit vector, and the direct sum action on that coordinate agrees with $\pi_{\varphi_{i_0}}$. It is therefore $(Q,\varepsilon)$-invariant. Since this works for every compact $Q$ and every $\varepsilon>0$, the Hilbert direct sum has almost invariant vectors. [F1, F7, step 3.2]

5.1 AC is used to select all witnesses in step 2.1 and is assumed by the GNS and direct-sum interfaces [F6]–[F8]. The estimates, the reverse implication in step 2.2, and the coordinate embedding use no further choice. [F6, F7, F8, step 2.1, step 2.2, step 4.1] ∎

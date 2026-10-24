---
id: ex-fell-convergence-of-characters-of-the-real-line
kind: example
title: Fell convergence of the characters of the real line
deps:
  - def-fell-topology-on-the-unitary-dual
  - def-unitary-dual-of-a-locally-compact-group
  - def-pontryagin-dual-and-compact-open-topology
  - lem-continuous-characters-of-the-real-line-are-exponentials
  - lem-fell-closure-of-a-single-representation-is-its-weak-containment-closure
  - def-weak-containment-of-unitary-representations
  - thm-schurs-lemma-for-unitary-representations
  - def-strongly-continuous-unitary-representation
  - def-axiom-of-choice
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_audit: "Assume AC, inherited from Schur and the Fell suppliers; the character computations are choice-free."
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.2: Example F.2.5(i) (dual group topology equals the Fell topology) and §F.1, Example F.1.12"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.D: the paragraph preceding Proposition 1.D.6 (abelian groups: the Fell topology is compact-uniform convergence of characters)"
status: published
origin: pipeline
---
## Example

Assume the Axiom of Choice. For $G=\mathbb R$ the unitary dual is
$$\widehat{\mathbb R}=\{\chi_t:t\in\mathbb R\},\qquad\chi_t(x)=e^{itx},$$
and a net $\chi_{t_i}$ converges to $\chi_t$ in the Fell topology
([[def-fell-topology-on-the-unitary-dual]]) if and only if $t_i\to t$ in
$\mathbb R$. For characters, weak containment $\chi_s\prec\chi_t$
([[def-weak-containment-of-unitary-representations]]) holds if and only if
$s=t$.

## Facts & Assumptions

**Given:** AC; the additive group $\mathbb R$; the parametrized characters $\chi_t(x)=e^{itx}$; the Fell topology on the unitary dual.

[F1] Schur's lemma: every bounded self-intertwiner of an irreducible strongly continuous unitary representation is a scalar multiple of the identity, and a nonzero bounded intertwiner between irreducible representations is a unitary equivalence up to a scalar ([[thm-schurs-lemma-for-unitary-representations]]).

[F2] Every continuous group homomorphism $\mathbb R\to\mathbb T$ is $\exp(2\pi i\xi\,\cdot)$ for a unique $\xi\in\mathbb R$; writing $t=2\pi\xi$, these are exactly the maps $\chi_t$ ([[lem-continuous-characters-of-the-real-line-are-exponentials]], [[def-pontryagin-dual-and-compact-open-topology]]).

[F3] Fell basis: a basic neighbourhood of a class $\pi$ is determined by finitely many functions of positive type associated to $\pi$, a compact set $Q$ and $\epsilon>0$, and consists of the classes whose coefficients approximate each of them to within $\epsilon$ on $Q$ ([[def-fell-topology-on-the-unitary-dual]]). For a one-dimensional unitary character $\chi$, a diagonal coefficient at a vector $z\in\mathbb C$ is $|z|^2\chi$, so the functions of positive type associated to $\chi$ are exactly the nonnegative multiples $c\chi$, $c\ge0$, and finite sums of them are again of this form ([[def-strongly-continuous-unitary-representation]]).

## Verification

**Proof technique:** direct.

**Given:** AC, the additive group $\mathbb R$, and the characters $\chi_t(x)=e^{itx}$.

1.1 Every irreducible strongly continuous unitary representation of the abelian group $\mathbb R$ is one-dimensional. Indeed, for fixed $g$ the operator $\pi(g)$ commutes with every $\pi(h)$, hence is a bounded self-intertwiner of $\pi$; [F1] makes it a scalar $\chi(g)I$. Every linear subspace is then invariant, so irreducibility forces $\dim H=1$; the resulting map $\chi:\mathbb R\to\mathbb T$ is a continuous unitary character. [F1]

1.2 By [F2] every continuous unitary character of $\mathbb R$ is $\chi_t$ for a unique $t\in\mathbb R$, and each $\chi_t$ is a continuous unitary character of $\mathbb R$. [F2]

2.1 Hence $\widehat{\mathbb R}=\{\chi_t:t\in\mathbb R\}$, with $t\mapsto\chi_t$ bijective: step 1.1 exhibits every irreducible class as a character, step 1.2 identifies the characters, and distinct $t$ give distinct characters (evaluate at a suitable $x$). [F2, step 1.1, step 1.2]

3.1 Fell convergence is compact-uniform convergence of the parameters. If $t_i\to t$, then for a compact $Q\subseteq\mathbb R$ and $R:=\sup_{x\in Q}|x|$ one has $\sup_{x\in Q}|\chi_{t_i}(x)-\chi_t(x)|\le R\,|t_i-t|\to0$; hence for every finite family $c_j\chi_t$ of tests, every compact $Q$ and every $\epsilon>0$, the test $c_j\chi_t$ is within $\epsilon$ on $Q$ of the coefficient $c_j\chi_{t_i}$ once $i$ is large, so $\chi_{t_i}\in W(\chi_t;\cdot,Q,\epsilon)$ eventually and $\chi_{t_i}\to\chi_t$ in the Fell topology. Conversely, suppose $\chi_{t_i}\to\chi_t$, let $0<\epsilon<1$ and fix $\delta>0$; put $Q:=[-\pi/\delta,\pi/\delta]$. By [F3] the neighbourhood determined by the coefficient $\chi_t$, the set $Q$ and $\epsilon$ is met eventually: there are $c'_i\ge0$ with $\sup_Q|\chi_t-c'_i\chi_{t_i}|<\epsilon$. Evaluating at $x=0$ gives $|1-c'_i|<\epsilon$, hence $c'_i>1-\epsilon$. If $|t_i-t|\ge\delta$, then $x_i:=\pi/|t_i-t|$ lies in $Q$ and $\chi_{t_i}(x_i)=-\chi_t(x_i)$, so $|\chi_t(x_i)-c'_i\chi_{t_i}(x_i)|=1+c'_i>2-\epsilon>1>\epsilon$, a contradiction. Hence eventually $|t_i-t|<\delta$, and since $\delta>0$ was arbitrary, $t_i\to t$. [F3, step 2.1]

4.1 Weak containment of characters: if $\chi_s\prec\chi_t$, then applying the defining approximation to the coefficient $\chi_s$ (the diagonal coefficient at a unit vector), the compact set $Q=[-\pi/\delta,\pi/\delta]$ and some $0<\epsilon<1$, and using [F3], we find $c'\ge0$ with $\sup_Q|\chi_s-c'\chi_t|<\epsilon$; evaluating at $0$ gives $c'>1-\epsilon$, and if $|s-t|\ge\delta$, the point $x=\pi/|s-t|\in Q$ gives $|\chi_s(x)-c'\chi_t(x)|=1+c'>1>\epsilon$, a contradiction. Hence $|s-t|<\delta$ for every $\delta>0$, so $s=t$; the converse is immediate by taking the identical coefficient. This agrees with [[lem-fell-closure-of-a-single-representation-is-its-weak-containment-closure]], since by step 3.1 the point $\chi_s$ lies in the Fell closure of $\{\chi_t\}$ exactly when $s=t$. [F3, step 2.1, step 3.1]

5.1 The Axiom of Choice is inherited from Schur's lemma and the Fell topology suppliers; the character and parameter computations use no further choice ([[def-axiom-of-choice]]). [given, F1, F2] ∎ 
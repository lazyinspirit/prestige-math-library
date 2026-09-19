---
id: prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t
kind: proposition
title: Characters are the integral weights
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-structure-of-a-compact-connected-abelian-lie-group, def-character-and-cocharacter-lattices-of-a-torus, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "Appendix K, differentiation of characters"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §7"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $T$ be a torus with Lie algebra $\mathfrak t$
and exponential map $\exp:\mathfrak t\to T$, normalized so that the exponential
of the circle group satisfies $\exp(2\pi i)=1$. Differentiation identifies the
character lattice $X^*(T)$ with the set
$$\{\lambda\in\operatorname{Hom}_{\mathbb C}(\mathfrak t_{\mathbb C},\mathbb C):\ \lambda(\Lambda)\subseteq2\pi i\,\mathbb Z\},\qquad \Lambda=\ker\exp,$$
through the formula $\chi(\exp X)=e^{\lambda(X)}$; the cocharacter lattice is
identified with the lattice
$\frac{1}{2\pi}\Lambda=\{X\in\mathfrak t:2\pi X\in\Lambda\}$ through
$\eta(e^{i\theta})=\exp(\theta X_\eta)$, and under these identifications the
pairing is
$$\langle\chi,\eta\rangle=\frac{\lambda(X_\eta)}{i}\in\mathbb Z .$$
In particular $X^*(T)$ and $X_*(T)$ are free abelian groups of rank
$\dim T$, and the pairing $X^*(T)\times X_*(T)\to\mathbb Z$ is perfect.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a torus $T$ with Lie algebra $\mathfrak t$ and kernel $\Lambda=\ker\exp$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the structure theorem [L1].

[L1] $\exp:\mathfrak t\to T$ is surjective with kernel a full lattice $\Lambda$, and the induced map $\mathfrak t/\Lambda\to T$ is a Lie-group isomorphism ([[thm-structure-of-a-compact-connected-abelian-lie-group]]).

[L2] A character is a continuous homomorphism $\chi:T\to S^1$, a cocharacter a continuous homomorphism $\eta:S^1\to T$, and the pairing is the integer $n$ with $\chi\circ\eta(z)=z^n$ ([[def-character-and-cocharacter-lattices-of-a-torus]]).

[L3] Every continuous homomorphism $\psi:V\to S^1$ from a finite-dimensional real vector space has a unique form $$ \psi(X)=e^{i\mu(X)} $$ for some $\mu\in V^*$. Indeed, after choosing a basis it is enough to treat a continuous homomorphism $u:\mathbb R\to S^1$. A continuous argument $a$ with $a(0)=0$ exists on a small interval. Whenever $s,t,s+t$ lie in a sufficiently small interval, $a(s+t)-a(s)-a(t)$ is a continuous $2\pi\mathbb Z$-valued function that vanishes at $(0,0)$, hence is zero. The continuous local Cauchy equation gives $a(t)=ct$ there, and for arbitrary $t$, choosing $n$ with $t/n$ in that interval gives $u(t)=u(t/n)^n=e^{ict}$. Combining the coordinates proves existence; uniqueness follows by restricting to each basis line. A continuous homomorphism $S^1\to S^1$ has the form $z\mapsto z^n$ for a unique $n\in\mathbb Z$ by [[def-character-and-cocharacter-lattices-of-a-torus]].

## Proof

**Proof technique:** direct.

1.1 Let $\chi\in X^*(T)$. The composite $\chi\circ\exp:\mathfrak t\to S^1$ is a continuous homomorphism, so [L3] gives a unique $\mu\in\mathfrak t^*$ with $\chi(\exp X)=e^{i\mu(X)}$. Put $\lambda=i\mu$ and extend it $\mathbb C$-linearly to $\mathfrak t_{\mathbb C}$. If $Y\in\Lambda$, then $1=\chi(\exp Y)=e^{\lambda(Y)}$, so $\lambda(Y)\in2\pi i\mathbb Z$; the map $\chi\mapsto\lambda$ is injective because $\exp$ is surjective. [L1, L2, L3]

1.2 Choose a $\mathbb Z$-basis $Y_1,\dots,Y_r$ of the full lattice $\Lambda$. By [L1], $$ \Phi:(S^1)^r\longrightarrow T,qquad \Phi(e^{i\theta_1},\dots,e^{i\theta_r}) =\exp\!\left(\sum_{j=1}^r\frac{\theta_j}{2\pi}Y_j\right) $$ is a Lie-group isomorphism. If $\eta:S^1\to T$ is a cocharacter, each coordinate of $\Phi^{-1}\eta$ is $z\mapsto z^{n_j}$ for a unique $n_j\in\mathbb Z$ by [L3]. Thus, with $$ X_\eta=\sum_{j=1}^r\frac{n_j}{2\pi}Y_j, $$ one has $\eta(e^{i\theta})=\exp(\theta X_\eta)$ and $2\pi X_\eta\in\Lambda$. Conversely every $X\in\mathfrak t$ with $2\pi X\in\Lambda$ gives the well-defined cocharacter $e^{i\theta}\mapsto\exp(\theta X)$. Hence $X_*(T)$ is identified with $\frac1{2\pi}\Lambda$, and the displayed formula also shows that $X_\eta=d\eta_1(i)$. [L1, L2, L3]

2.1 Conversely let $\lambda\in\operatorname{Hom}_{\mathbb C}(\mathfrak t_{\mathbb C},\mathbb C)$ satisfy $\lambda(\Lambda)\subseteq2\pi i\mathbb Z$. Since the lattice basis in step 1.2 spans $\mathfrak t$ over $\mathbb R$, the restriction of $\lambda$ to $\mathfrak t$ takes values in $i\mathbb R$. Therefore $\chi(\exp X):=e^{\lambda(X)}$ takes values in $S^1$ and is well defined: if $\exp X=\exp X'$ then $X-X'\in\Lambda$, so $e^{\lambda(X-X')}=1$. It is a continuous homomorphism $T\to S^1$, so it is a character, and its differentiated weight is $\lambda$; hence the constructions are mutually inverse bijections. [L1, L2, step 1.1, step 1.2]

2.2 Pairing: with $\chi$ and $\lambda$ related as in step 1.1 and $\eta$ with $2\pi X_\eta\in\Lambda$ as in step 1.2, one has $\chi(\eta(e^{i\theta}))=e^{\lambda(\theta X_\eta)}=e^{i\theta\lambda(X_\eta)/i}$, so the integer $n$ with $\chi\circ\eta(z)=z^n$ is $n=\lambda(X_\eta)/i$; it is an integer because $2\pi X_\eta\in\Lambda$ and $\lambda(2\pi X_\eta)\in2\pi i\mathbb Z$, so that $\lambda(X_\eta)/i=\lambda(2\pi X_\eta)/(2\pi i)\in\mathbb Z$. [L1, L2, step 1.1, step 1.2]

3.1 Perfectness and freeness: choosing a $\mathbb Z$-basis $Y_1,\dots,Y_r$ of $\Lambda$ identifies $\Lambda\cong\mathbb Z^r$, hence also $X_*(T)\cong\frac{1}{2\pi}\Lambda\cong\mathbb Z^r$, while the characters correspond to the dual basis: $\lambda$ is determined by the integers $\lambda(Y_j)/(2\pi i)$, and conversely every integer vector gives such a $\lambda$ by linear extension, because the basis spans $\mathfrak t$ over $\mathbb R$. Hence $X^*(T)\cong\mathbb Z^r$ is free of rank $r=\dim T$, the pairing is the dot product in these coordinates, and it is perfect. [A1, L1, step 2.1, step 1.2, step 2.2]∎

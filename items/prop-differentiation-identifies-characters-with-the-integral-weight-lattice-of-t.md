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

[L3] Every continuous homomorphism $\phi:\mathfrak t\to\mathbb R$ from the additive group of a finite-dimensional real vector space is $\mathbb R$-linear, and a continuous homomorphism $S^1\to S^1$ has the form $z\mapsto z^n$ for a unique $n\in\mathbb Z$ ([[def-character-and-cocharacter-lattices-of-a-torus]]).

## Proof

**Proof technique:** direct.

1.1 Let $\chi\in X^*(T)$. Since $\mathfrak t$ is simply connected and $\exp:\mathfrak t\to T$ and $t\mapsto e^{it}$ (equivalently $\mathbb R\to S^1$) are covering homomorphisms, $\chi\circ\exp$ lifts to a continuous homomorphism $\mu:\mathfrak t\to\mathbb R$ with $e^{i\mu(X)}=\chi(\exp X)$; by [L3] $\mu$ is $\mathbb R$-linear, and $\lambda:=i\mu:\mathfrak t\to i\mathbb R\subseteq\mathbb C$ extends $\mathbb C$-linearly to $\mathfrak t_{\mathbb C}$, so that $\chi(\exp X)=e^{\lambda(X)}$. Well-definedness of $\chi$ on $T=\mathfrak t/\Lambda$ forces $\lambda(\Lambda)\subseteq2\pi i\mathbb Z$; the map $\chi\mapsto\lambda$ is injective because $\exp$ is surjective. [L1, L2, L3]

1.2 The cocharacter lattice is identified with $\frac{1}{2\pi}\Lambda$: a cocharacter $\eta:S^1\to T$ has $X_\eta:=d\eta_1(i)\in\mathfrak t$ (where $i$ generates $\operatorname{Lie}(S^1)$), and $\eta(e^{i\theta})=\exp(\theta X_\eta)$; well-definedness at $\theta=2\pi$ gives $\exp(2\pi X_\eta)=1$, i.e. $2\pi X_\eta\in\Lambda$, and conversely every $X\in\mathfrak t$ with $2\pi X\in\Lambda$ gives the cocharacter $e^{i\theta}\mapsto\exp(\theta X)$. [L1, L2]

2.1 Conversely let $\lambda:\mathfrak t\to\mathbb C$ be $\mathbb C$-linear with $\lambda(\Lambda)\subseteq2\pi i\mathbb Z$. Then $\chi(\exp X):=e^{\lambda(X)}$ is well defined: if $\exp X=\exp X'$ then $X-X'\in\Lambda$, so $e^{\lambda(X-X')}=1$. It is a continuous homomorphism $T\to S^1$, so it is a character, and its lift is $\lambda$; hence the constructions are mutually inverse bijections. [L1, L2, step 1.1]

2.2 Pairing: with $\chi$ and $\lambda$ related as in step 1.1 and $\eta$ with $2\pi X_\eta\in\Lambda$ as in step 1.2, one has $\chi(\eta(e^{i\theta}))=e^{\lambda(\theta X_\eta)}=e^{i\theta\lambda(X_\eta)/i}$, so the integer $n$ with $\chi\circ\eta(z)=z^n$ is $n=\lambda(X_\eta)/i$; it is an integer because $2\pi X_\eta\in\Lambda$ and $\lambda(2\pi X_\eta)\in2\pi i\mathbb Z$, so that $\lambda(X_\eta)/i=\lambda(2\pi X_\eta)/(2\pi i)\in\mathbb Z$. [L1, L2, step 1.1, step 1.2]

3.1 Perfectness and freeness: choosing a $\mathbb Z$-basis $Y_1,\dots,Y_r$ of $\Lambda$ identifies $\Lambda\cong\mathbb Z^r$, hence also $X_*(T)\cong\frac{1}{2\pi}\Lambda\cong\mathbb Z^r$, while the characters correspond to the dual basis: $\lambda$ is determined by the integers $\lambda(Y_j)/(2\pi i)$, and conversely every integer vector gives such a $\lambda$ by linear extension, because the basis spans $\mathfrak t$ over $\mathbb R$. Hence $X^*(T)\cong\mathbb Z^r$ is free of rank $r=\dim T$, the pairing is the dot product in these coordinates, and it is perfect. [A1, L1, step 2.1, step 1.2, step 2.2]∎

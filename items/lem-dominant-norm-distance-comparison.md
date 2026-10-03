---
id: lem-dominant-norm-distance-comparison
kind: lemma
title: A dominant vector minimises its distance to a dominant weight
status: draft
origin: pipeline
deps:
- def-axiom-of-choice
- def-integral-dominant-and-strictly-dominant-weights
- def-partial-order-on-weights
- def-root-reflections-and-the-weyl-group-action
- lem-finite-weyl-closed-chambers-and-stabilizers
- lem-finite-weyl-positive-roots-and-simple-reflections
- prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Lemma 23.4 and its proof
    url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
    locator: §23.2, Lemma 23.4 and proof, printed pp. 116-118 (full 162-page notes read at harvest);
      the present linear form is the same norm comparison in the case where both vectors are dominant,
      proved there through strong-linkage chains and here through chamber descent
  - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Proposition 2.67 and Corollary
      2.68
    url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
    locator: Chapter II, §6, Proposition 2.67 and Corollary 2.68 with proofs, printed p. 168 (dominant
      orbit representatives). The distance inequality and stabilizer equality case are proved locally
      by chamber descent, not asserted by Theorem 5.5.
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Work in the real span
$E$ of the roots with its $W$-invariant positive definite form, and let $\xi$
and $\eta$ be weights in $E$ that are dominant, so
$\langle\xi,\alpha_i^\vee\rangle\ge0$ and
$\langle\eta,\alpha_i^\vee\rangle\ge0$ for every simple root $\alpha_i$
([[def-integral-dominant-and-strictly-dominant-weights]]). Then
$$\lvert\xi-w\eta\rvert\ge\lvert\xi-\eta\rvert\qquad\text{for every }w\in W,$$
and equality holds if and only if $w\eta$ lies in the set
$W_\xi\eta=\{v\eta:v\in W_\xi\}$, where $W_\xi=\{v\in W:v\xi=\xi\}$ is the
stabilizer of $\xi$. In particular, if $\xi$ is regular, so that
$W_\xi=\{1\}$, then equality forces $w\eta=\eta$; if $\xi=0$ then equality
holds for every $w$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the real span $E$ of the roots with its positive definite $W$-invariant form, and dominant weights $\xi,\eta\in E$.

[F1] The reflection $s_\alpha$ acts on $\mathfrak h^*$ by $s_\alpha(\lambda)=\lambda-\langle\lambda,\alpha^\vee\rangle\alpha$ with $\langle\lambda,\alpha^\vee\rangle=2(\lambda,\alpha)/(\alpha,\alpha)$, it is orthogonal for the form on $E$, and the simple roots form a basis of $E$; dominance means nonnegativity on the simple coroots ([[def-root-reflections-and-the-weyl-group-action]], [[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]], [[def-integral-dominant-and-strictly-dominant-weights]]).

[F2] Each simple reflection $s_i$ permutes $\Phi^+\setminus\{\alpha_i\}$ and sends $\alpha_i$ to $-\alpha_i$; the simple reflections generate $W$ ([[lem-finite-weyl-positive-roots-and-simple-reflections]]).

[F3] Every $W$-orbit in $E$ contains exactly one point of the closed chamber $\overline{\mathcal C}=\{x\in E:(x,\alpha_i)\ge0\text{ for all }i\}$ ([[lem-finite-weyl-closed-chambers-and-stabilizers]]).

## Proof

**Proof technique:** direct, by chamber descent along simple reflections that decrease the number of negative pairings.

1.1 Since $\eta$ is dominant, the closed chamber is $\overline{\mathcal C}=\{x\in E:(x,\alpha_i)\ge0\text{ for all }i\}$, and for $x\in W$ and a simple root $\alpha_i$ with $\langle x\eta,\alpha_i^\vee\rangle<0$ we set $c=-\langle x\eta,\alpha_i^\vee\rangle>0$, so that $s_ix\eta=x\eta+c\alpha_i$. Let $d(x)=\#\{\beta\in\Phi^+:\langle x\eta,\beta^\vee\rangle<0\}$ be the number of positive roots pairing negatively with $x\eta$. [F1, F2, F3, given]

2.1 For such $x$ and $\alpha_i$ one has $\lvert\xi-s_ix\eta\rvert^2-\lvert\xi-x\eta\rvert^2=-2c\,(\xi,\alpha_i)\le0$, because $s_ix\eta=x\eta+c\alpha_i$ and expansion gives $-2c(\xi-x\eta,\alpha_i)+c^2(\alpha_i,\alpha_i)=-2c(\xi,\alpha_i)-c^2(\alpha_i,\alpha_i)+c^2(\alpha_i,\alpha_i)$, while $(\xi,\alpha_i)=\langle\xi,\alpha_i^\vee\rangle(\alpha_i,\alpha_i)/2\ge0$ by dominance of $\xi$. Thus a descent step never increases the distance from $\xi$. [step 1.1, F1, algebra]

2.2 If $\langle x\eta,\alpha_i^\vee\rangle<0$ then $d(s_ix)=d(x)-1$. Indeed, for $\beta\in\Phi^+\setminus\{\alpha_i\}$ the orthogonality of $s_i$ gives $\langle s_ix\eta,\beta^\vee\rangle=\langle x\eta,s_i\beta^\vee\rangle$, and by [F2] the map $\beta\mapsto s_i\beta$ is a bijection of $\Phi^+\setminus\{\alpha_i\}$; the root $\alpha_i$ itself pairs negatively with $x\eta$ but, by $s_i\alpha_i=-\alpha_i$ and $\langle x\eta,-\alpha_i^\vee\rangle>0$, not with $s_ix\eta$. Hence the negative positive roots at $s_ix\eta$ are in bijection with the negative positive roots at $x\eta$ other than $\alpha_i$, of which there are $d(x)-1$. [F2, step 1.1, algebra]

3.1 Starting from $x_0=w$, iterate: if $x_j\eta$ is not in the closed chamber, choose a simple root $\alpha_i$ with $\langle x_j\eta,\alpha_i^\vee\rangle<0$ and set $x_{j+1}=s_ix_j$. By step 2.1 the distances $\lvert\xi-x_j\eta\rvert$ are nonincreasing, and by step 2.2 the integer $d(x_j)$ drops by one at each step, so the iteration terminates after at most $d(w)$ steps at an element $x_m$ with $x_m\eta\in\overline{\mathcal C}$. By [F3] the dominant point of the orbit $W\eta$ is unique, so $x_m\eta=\eta$. Therefore $\lvert\xi-\eta\rvert=\lvert\xi-x_m\eta\rvert\le\lvert\xi-w\eta\rvert$ for every $w\in W$. [F1, F3, step 2.1, step 2.2, given]

4.1 Suppose $\lvert\xi-w\eta\rvert=\lvert\xi-\eta\rvert$ and run any descent from $w$ as in step 3.1. The values $\lvert\xi-x_j\eta\rvert$ are nonincreasing and their first and last terms are equal, so every step is an equality, and step 2.1 with $c>0$ gives $(\xi,\alpha_{i_j})=0$, equivalently $s_{i_j}\xi=\xi$, for every reflecting root used. Writing $x_m=s_{i_m}\cdots s_{i_1}w$ and $x_m\eta=\eta$, the element $v:=s_{i_1}\cdots s_{i_m}$ fixes $\xi$, and $w\eta=(s_{i_1}\cdots s_{i_m})\eta=v\eta$; hence $w\eta\in W_\xi\eta$. [F1, step 2.1, step 3.1, algebra]

5.1 Conversely, if $w\eta=v\eta$ with $v\xi=\xi$, then the $W$-invariance of the form and the orthogonality of $v$ give $\lvert\xi-w\eta\rvert=\lvert\xi-v\eta\rvert=\lvert v^{-1}(\xi-v\eta)\rvert=\lvert v^{-1}\xi-\eta\rvert=\lvert\xi-\eta\rvert$. Together with steps 3.1 and 4.1 this proves the inequality for every $w\in W$ with equality exactly when $w\eta\in W_\xi\eta$; if $\xi$ is regular then no root reflection fixes $\xi$, so $W_\xi=\{1\}$ and equality forces $w\eta=\eta$. [F1, step 3.1, step 4.1] ∎

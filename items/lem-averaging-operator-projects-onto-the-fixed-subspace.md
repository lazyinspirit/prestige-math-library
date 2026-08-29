---
id: lem-averaging-operator-projects-onto-the-fixed-subspace
kind: lemma
title: "The averaging operator projects onto the fixed subspace"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-g-fixed-subspace-of-a-representation]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Lemma 3.2.2"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $\rho:G\to\operatorname{GL}(V)$ be a finite-dimensional representation of
a finite group $G$ over $\mathbb C$. The **averaging operator**

$$P:=\frac{1}{|G|}\sum_{g\in G}\rho(g)$$

satisfies $P^2=P$ and has image exactly $V^{G}$; consequently
$\operatorname{tr}P=\dim V^{G}$.

## Facts & Assumptions

**Given:** A finite group $G$ and a finite-dimensional complex representation $\rho:G\to\operatorname{GL}(V)$.

[F1] The fixed subspace is $V^{G}=\{v\in V:g\cdot v=v\text{ for every }g\in G\}$ ([[def-g-fixed-subspace-of-a-representation]]).

[A2] If $T$ is a projection of a finite-dimensional vector space, meaning $T^2=T$, then $V=\operatorname{im}T\oplus\ker T$, $T$ restricts to the identity on $\operatorname{im}T$, and in a basis adapted to that decomposition the matrix of $T$ is block diagonal with an identity block and a zero block.

## Proof

**Proof technique:** direct.

1.1 For $h\in G$, $\rho(h)P=\frac{1}{|G|}\sum_{g}\rho(hg)$ $=\frac{1}{|G|}\sum_{g}\rho(g)=P$, because left translation by $h$ permutes $G$, so the sums run over the same index set. [given, algebra]

2.1 Hence for every $v\in V$, the vector $Pv$ satisfies $h\cdot(Pv)=\rho(h)Pv=Pv$ for every $h\in G$, so $Pv\in V^{G}$ by [F1]; thus $\operatorname{im}P\subseteq V^{G}$. [F1, step 1.1, given]

3.1 If $v\in V^{G}$, then $\rho(g)v=v$ for every $g$ by [F1], so $Pv=\frac{1}{|G|}\sum_{g}v=\frac{|G|}{|G|}v=v$. Thus $V^{G}\subseteq \operatorname{im}P$, and with step 2.1, $\operatorname{im}P=V^{G}$ exactly. [F1, step 2.1, algebra]

4.1 For $v\in V^{G}$, step 3.1 gives $P(Pv)=Pv=v=Pv$; for general $v$, $Pv\in V^{G}$ by step 2.1, so $P^2v=P(Pv)=Pv$. Hence $P^2=P$. [step 2.1, step 3.1, algebra]

5.1 By [A2] applied to $P$ from step 4.1, $V=\operatorname{im}P\oplus\ker P$ and the matrix of $P$ in an adapted basis has an identity block of size $\dim(\operatorname{im}P)$ and a zero block. Its trace is therefore $\dim(\operatorname{im}P)$, and step 3.1 identifies $\operatorname{im}P$ with $V^{G}$. [A2, step 4.1, step 3.1, algebra] ∎

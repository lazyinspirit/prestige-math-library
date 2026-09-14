---
id: def-feferman-levy-symmetric-collapse-system
kind: definition
title: The Feferman–Levy symmetric collapse system
status: draft
origin: pipeline
deps: [def-cohen-collapse-and-levy-collapse-forcings, def-symmetric-forcing-system-and-hereditarily-symmetric-names, def-forcing-name-automorphism-action, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Thomas Jech, The Axiom of Choice, Theorem 10.6, equations (10.2)–(10.5), printed pp. 142–143", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Definition

Work over a transitive ground model $V\models\mathrm{ZFC}+\mathrm{GCH}$.
The use of Choice is confined to the ground-model aleph sequence and the GCH
cardinal calculations below; [[def-axiom-of-choice]] is not assumed in the
eventual symmetric model. Put $\kappa_n=\aleph_n^V$ for $n<\omega$ and let
$P$ be the set of finite partial functions

$$p:\omega\times\omega\rightharpoonup\bigcup_{n<\omega}\kappa_n$$

such that $p(n,i)<\kappa_n$ whenever $(n,i)\in\operatorname{dom}(p)$,
ordered by reverse inclusion. Equivalently, $p$ is a finite set of triples
$(n,i,\alpha)$, functional in $(n,i)$, with $\alpha<\kappa_n$. Its restriction
to the first $m$ layers is

$$p\mathbin{\upharpoonright}m=\{(n,i,\alpha)\in p:n<m\}.$$

Thus the $n$th layer is the collapse order
$\operatorname{Col}(\omega,\kappa_n)$ from
[[def-cohen-collapse-and-levy-collapse-forcings]], and $P$ is their
finite-support product.

Let $\mathscr G$ consist of the permutations $\pi$ of
$\omega\times\omega$ which preserve the first coordinate. Thus
$\pi(n,i)=(n,\pi_n(i))$ for a sequence of permutations
$\pi_n\in\operatorname{Sym}(\omega)$. It acts on $P$ by

$$\pi p=\{(n,\pi_n(i),\alpha):(n,i,\alpha)\in p\},$$

and on names by [[def-forcing-name-automorphism-action]]. For $m<\omega$ let

$$H_m=\{\pi\in\mathscr G:\pi_n=\operatorname{id}_\omega\text{ for every }n<m\}.$$

The subgroups $H_m$ are normal, $H_{m+1}\subseteq H_m$, and their upward
closure is a normal filter $\mathcal F$ of subgroups. Hence
$(P,\mathscr G,\mathcal F)$ is a symmetric system in the sense of
[[def-symmetric-forcing-system-and-hereditarily-symmetric-names]]. If $G$ is
$V$-generic, its hereditarily symmetric interpretation

$$N=\mathrm{HS}_{\mathcal F}^{G}$$

is called the **Feferman–Levy model**. A name is said to have
**$m$-bounded layer support** when $H_m$ fixes it.

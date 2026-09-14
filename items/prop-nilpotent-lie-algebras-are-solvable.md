---
id: prop-nilpotent-lie-algebras-are-solvable
kind: proposition
title: Nilpotent Lie algebras are solvable
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-derived-series-and-solvable-lie-algebra, def-lower-central-series-and-nilpotent-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §5.4"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "§5.4, lower central and derived series, printed pp. 101–102"
---

## Statement

For every Lie algebra $\mathfrak g$ and every $r\geq0$,

$$\mathfrak g^{(r)}\subseteq\gamma_{2^r}(\mathfrak g).$$

Consequently every nilpotent Lie algebra is solvable.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$.

[L1] The derived series satisfies
$\mathfrak g^{(r+1)}=[\mathfrak g^{(r)},\mathfrak g^{(r)}]$
([[def-derived-series-and-solvable-lie-algebra]]).

[L2] The lower central series satisfies
$\gamma_{q+1}=[\mathfrak g,\gamma_q]$, and nilpotence means that a lower term
vanishes ([[def-lower-central-series-and-nilpotent-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 We first prove $[\gamma_p,\gamma_q]\subseteq\gamma_{p+q}$ for all $p,q\geq1$. For $p=1$ this is [L2]. If it holds for $p-1$ and every second index, Jacobi gives $[ [\mathfrak g,\gamma_{p-1}],\gamma_q]\subseteq[\mathfrak g,[\gamma_{p-1},\gamma_q]]+[\gamma_{p-1},[\mathfrak g,\gamma_q]]\subseteq[\mathfrak g,\gamma_{p+q-1}]+[\gamma_{p-1},\gamma_{q+1}]\subseteq\gamma_{p+q}$. [L2, algebra]

2.1 At $r=0$, $\mathfrak g^{(0)}=\mathfrak g=\gamma_1$. If $\mathfrak g^{(r)}\subseteq\gamma_{2^r}$, then [L1] and step 1.1 imply $\mathfrak g^{(r+1)}\subseteq[\gamma_{2^r},\gamma_{2^r}]\subseteq\gamma_{2^{r+1}}$. Thus the displayed containment holds for every $r$. [L1, L2, step 1.1, algebra]

3.1 If $\mathfrak g$ is nilpotent, choose a given bound $c$ with $\gamma_{c+1}=0$ as in [L2]. Taking $r=c+1$ gives $2^r\geq c+1$, so descent of the lower series and step 2.1 yield $\mathfrak g^{(r)}\subseteq\gamma_{2^r}\subseteq\gamma_{c+1}=0$. Hence $\mathfrak g$ is solvable by [L1]. This includes $\mathfrak g=0$ and uses only the supplied finite bound. [L1, L2, step 2.1] ∎

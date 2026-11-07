---
dependency_level: 1
id: lem-gcd-graph-quality-selection-and-pruning
kind: lemma
title: Quality formulas, partitions and pruning for GCD graphs
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-finite-weighted-gcd-graph
- thm-cauchy-schwarz-and-the-euclidean-norm
sources:
  references:
  - title: D. Koukoulopoulos and J. Maynard, On the Duffin–Schaeffer conjecture, Annals192(2020),251–307
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf
proof_strategy: direct
---

## Statement

Let $G$ be a nontrivial finite weighted GCD graph. For an unrecorded prime $p$, put $\alpha_k=\mu(V_k)/\mu(V)$, $\beta_l=\mu(W_l)/\mu(W)$, and $e_{kl}=\mu(E_{kl})/\mu(E)$. Whenever $e_{kl}>0$,
$$ \frac{q(G_{kl})}{q(G)}=\frac{e_{kl}^{10}p^{|k-l|}}{(\alpha_k\beta_l)^9(1-\mathbf1_{k=l\ge1}/p)^2(1-p^{-s})^{10}},\qquad \frac{\delta(G_{kl})}{\delta(G)}=\frac{e_{kl}}{\alpha_k\beta_l}. $$
There is a subgraph with unchanged prime data, no smaller density or quality, and every vertex having neighbor mass at least $9\delta'/10$ times the opposite side mass. For every $\eta\in(0,1)$ there is a subgraph with unchanged prime data and no smaller quality in which
$$ \mu(E'\cap(A\times B))\le\eta^{9/5}\mu(E') $$
whenever $\mu(A)\le\eta\mu(V')$ and $\mu(B)\le\eta\mu(W')$. Finally, for partitions into $I$ left and $J$ right classes, some positive-mass edge rectangle has density at least $\delta/(IJ)$ and quality at least $q(G)/(IJ)^{10}$.

## Statement references

[Koukoulopoulos–Maynard, §§6–14](https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf)

## Facts & Assumptions

**Given:** All the hypotheses and notation in the Statement. All graph sums and prime data are finite; all constants are absolute.

[F1] The finite graph data, density and quality are defined in [[def-finite-weighted-gcd-graph]].

[F2] Finite Cauchy–Schwarz holds ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

1.1 The graph $G_{kl}$ is valid because both retained valuation classes are exact, so their edge gcd valuation is $\min(k,l)$. Cancelling the unchanged prime factors in the definition of quality gives both displayed identities. Subgraphhood is transitive, and residual prime sets only decrease, directly from the definitions. [given, F1, algebra]

2.1 Remove a left vertex of mass $a$ whose neighbor mass is less than $0.9\delta\mu(W)$. If $a=0$ this changes no mass. Otherwise put $u=a/\mu(V)$. The remaining edge fraction is greater than $1-0.9u>0$, so $u<1$ and its density ratio is at least $(1-0.9u)/(1-u)\ge1$. Its quality ratio is at least $(1-0.9u)^{10}/(1-u)^9\ge1$: divide by $1-u$, then use $(1+u/(10(1-u)))^{10}\ge1+u/(1-u)$. Right-vertex removal is identical. Finitely many removals suffice because the vertex number strictly decreases. This proves the high-degree conclusion. [F1, step 1.1, algebra]

2.2 If the small-set assertion fails, restrict to an offending rectangle $A\times B$. Its edge fraction exceeds $\eta^{9/5}$ and its side fractions are at most $\eta$, so its quality ratio exceeds $(\eta^{9/5})^{10}/\eta^{18}=1$. Both vertex sets strictly decrease, since each has strictly smaller mass. Iterate finitely until no such rectangle remains. [F1, step 1.1, algebra]

3.1 The $IJ$ edge rectangles partition $E$. One has mass at least $\mu(E)/(IJ)>0$. Its side masses are no larger than the original ones, so density and the identity $q=\mu(E)^{10}/(\mu(V)^9\mu(W)^9)$ times the unchanged prime factor give the asserted bounds. This proves the final assertion. [F1, step 1.1, algebra] ∎

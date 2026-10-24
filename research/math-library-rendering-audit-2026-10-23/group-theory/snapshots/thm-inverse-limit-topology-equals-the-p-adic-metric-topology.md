---
id: thm-inverse-limit-topology-equals-the-p-adic-metric-topology
kind: theorem
title: "The inverse-limit topology on Zp agrees with the p-adic metric topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-p-adic-metric-on-zp, def-inverse-limit-topology-for-finite-discrete-groups, def-p-adic-integers-as-compatible-residue-classes]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Gareth Wilkes, Profinite Groups and Group Cohomology lecture notes"
      url: "https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf"
    - title: "Jordan Bell, The profinite completion of the integers, the p-adic integers, and Prufer p-groups"
      url: "https://jordanbell.info/LaTeX/mathematics/profinite/"
---

## Statement

The inverse-limit topology on $\mathbb Z_p$ coincides with the topology induced
by the metric $d_p$.

## Facts & Assumptions

**Given:** An element $x=(x_n)$ of $\mathbb Z_p$ and an integer $n\ge1$.

[F1] The metric on $\mathbb Z_p$ is defined by the largest initial block of equal residue coordinates ([[def-p-adic-metric-on-zp]]).

[L1] The inverse-limit topology is the subspace topology from the product of the discrete quotients, and cylinder traces form a basis ([[def-inverse-limit-topology-for-finite-discrete-groups]]).

[L2] An element of $\mathbb Z_p$ is exactly a compatible residue-class tuple ([[def-p-adic-integers-as-compatible-residue-classes]]).

## Proof

**Proof technique:** direct.

1.1 Let $U_n(x):=\{y=(y_r)\in\mathbb Z_p:y_r=x_r\text{ for }1\le r\le n\}$. By [F1], this is exactly the metric ball $$U_n(x)=\{y\in\mathbb Z_p:d_p(x,y)\le p^{-n}\},$$ because the first $n$ residue coordinates agree if and only if the largest initial block of equal coordinates has length at least $n$. [F1, L2, given, algebra]

2.1 By [L1], the same set $U_n(x)$ is the trace on $\mathbb Z_p$ of the cylinder in the product space that fixes the first $n$ coordinates, so every basic metric ball is inverse-limit open. Conversely, let a basic inverse-limit cylinder $C$ contain $x$ and restrict the finite set of coordinates $F$. Taking $n\ge r$ for every $r\in F$, compatibility in [L2] shows that $U_n(x)\subseteq C$. Thus the sets $U_n(x)$ refine every inverse-limit neighbourhood of $x$. [L1, L2, step 1.1, algebra]

3.1 The sets $U_n(x)$ therefore form a neighbourhood basis for both topologies at every point $x$. So the inverse-limit topology and the metric topology coincide. [step 1.1, step 2.1] ∎

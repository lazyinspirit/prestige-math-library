---
id: lem-author-6f173a9d0001-dihedral-roots
kind: lemma
title: Roots of the infinite dihedral geometric representation
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-real-coxeter-interface-artin-tits-prerequisites
dependency_roles:
  def-real-coxeter-interface-artin-tits-prerequisites: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Use the real Coxeter representation of [[def-real-coxeter-interface-artin-tits-prerequisites]] for $S=\{s,t\}$ and $m(s,t)=\infty$. Write $\alpha=\alpha_s$, $\beta=\alpha_t$ and $\delta=\alpha+\beta$. Its roots are exactly $\{\pm(\alpha+k\delta):k\in\mathbb Z\}$. In dual coordinates $x=f(\alpha)$, $y=f(\beta)$, $a=x+y$ and $b=x$, its distinct root hyperplanes are $H_k=\{b+ka=0\}$, indexed by $k\in\mathbb Z$.

## Facts & Assumptions

[F1] **Given:** The geometric form has $B(\alpha,\beta)=-1$ and the roots are the orbits of the two simple roots, as defined in [[def-real-coxeter-interface-artin-tits-prerequisites]]. **Goal:** Compute those orbits and kernels.

## Proof



**Proof technique:** direct.

1.1 The reflection formula gives $s\alpha=-\alpha$, $s\beta=\beta+2\alpha$, $t\alpha=\alpha+2\beta$, $t\beta=-\beta$. Thus both generators fix $\delta$. If $r_k=\alpha+k\delta$, then $sr_k=-r_{-k}$ and $tr_k=-r_{-k-2}$. The set $\{\pm r_k\}$ is invariant and contains $\alpha=r_0$ and $\beta=-r_{-1}$, so it contains every root. [F1, algebra]

2.1 Composing the two displayed transformations changes the index by $2$ or $-2$, without changing the overall sign. Hence the orbit of $\alpha$ contains all even-indexed $r_k$, and the orbit of $\beta$ contains all odd-indexed $r_k$, up to sign. Applying a reflection supplies their negatives as well. This proves equality with the root set. [step 1.1, algebra]

3.1 Evaluation gives $f(r_k)=b+ka$. Since $(a,b)$ are independent coordinates, the forms $b+ka$ and $b+\ell a$ are proportional only if $k=\ell$. Their kernels are precisely the distinct root hyperplanes. [step 2.1, algebra] ∎

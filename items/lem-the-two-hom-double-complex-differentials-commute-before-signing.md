---
id: lem-the-two-hom-double-complex-differentials-commute-before-signing
kind: lemma
title: "The two Hom double-complex differentials commute before signing"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hom-double-complex-of-a-projective-and-an-injective-resolution]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

For the Hom double complex $K^{p,q}=\operatorname{Hom}_{\mathcal A}(P_p,I^q)$,
the unsigned horizontal and vertical maps commute:
$$
h^{p,q+1}v^{p,q}=v^{p+1,q}h^{p,q}:K^{p,q}\longrightarrow K^{p+1,q+1}.
$$
Moreover, $h^2=0=v^2$. Consequently the signed total differential
$D|_{K^{p,q}}=h+(-1)^p v$ satisfies $D^2=0$.

## Facts & Assumptions

**Given:** Projective and injective resolutions $P_\bullet\to M$ and $N\to I^\bullet$, with the maps $h(f)=f\circ d_P$ and $v(f)=d_I\circ f$.

## Proof

**Proof technique:** direct.

1.1 For $f\in K^{p,q}$, both mixed composites equal $d_I^q\circ f\circ d_{P,p+1}$, so $hv(f)=vh(f)$. The resolution identities also give $h^2(f)=f\circ d_{P,p+1}d_{P,p+2}=0$ and $v^2(f)=d_I^{q+1}d_I^q\circ f=0$. [given, algebra]

2.1 Since the horizontal degree increases from $p$ to $p+1$ after applying $h$, $$ D^2f=h^2f+(-1)^{p+1}vhf+(-1)^phvf+v^2f=0. $$ [step 1.1, algebra] ∎

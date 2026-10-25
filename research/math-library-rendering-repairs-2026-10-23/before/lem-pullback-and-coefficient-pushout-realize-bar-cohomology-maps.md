---
id: lem-pullback-and-coefficient-pushout-realize-bar-cohomology-maps
kind: lemma
title: "Pullback and coefficient pushout realize bar cohomology maps"
status: published
origin: pipeline
deps: [lem-bar-two-cocycles-classify-abelian-kernel-extensions, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21"
      url: "https://arxiv.org/pdf/1103.4052"
---

## Statement

Assume AC. Pulling back an abelian-kernel extension along $\alpha:H\to G$ represents $\alpha^*:H^2(G,A)\to H^2(H,A)$. Pushing it out along a G-module map $u:A\to B$ represents $u_*:H^2(G,A)\to H^2(G,B)$. These are the abelian-kernel constructions, with the fixed actions. H2 denotes normalized bar cohomology, with its inherited derived interpretation.

## Facts & Assumptions

**Given:** AC and an extension $0\to A\xrightarrow{i}E\xrightarrow{p}G\to1$, a group map alpha and a module map u.

[F1] An extension is classified by its normalized factor-set class, with section changes adding coboundaries ([[lem-bar-two-cocycles-classify-abelian-kernel-extensions]]).

[F2] AC supplies normalized sections from the nonempty fibers ([[def-axiom-of-choice]]).

## Proof

1.1 The pullback is $P=\{(e,h):p(e)=\alpha(h)\}\le E\times H$. Its projection to H is onto, its kernel is $\{(i(a),1)\}$, and the conjugation action is the restricted action. Choose a normalized section s of E using AC; $(s(\alpha(h)),h)$ is a section of P. Its factor set is $(h,l)\mapsto f(\alpha(h),\alpha(l))$. By F1 this represents the bar pullback, including when alpha is not injective or surjective. [F1, F2, given, algebra]

1.2 Let E act on B through p and form $B\rtimes E$. The subgroup $S=\{(-u(a),i(a)):a\in A\}$ is normal: conjugation by $(b,e)$ sends its a-element to the one indexed by $p(e)a$, since i(A) acts trivially on B and u is equivariant. Set $E_u=(B\rtimes E)/S$. The map $B\to E_u$, $b\mapsto[(b,1)]$, is injective, because intersection with S forces i(a)=1 and a=0. Projection to G is onto, and any kernel element $[(b,i(a))]$ equals $[(b+u(a),1)]$. Thus its kernel is exactly B, with the prescribed action. [given, algebra]

2.1 The section $g\mapsto[(0,s(g))]$ has product $[(0,s(g)s(h))]=[(u(f(g,h)),s(gh))]$, hence factor set u f. It represents the coefficient map by F1. Replacing f by $f+\delta c$ replaces the two resulting cocycles by $\alpha^*f+\delta(\alpha^*c)$ and $uf+\delta(uc)$, respectively. Extension equivalences induce the same maps by $[(b,e)]\mapsto[(b,\theta(e))]$ and $(e,h)\mapsto(\theta(e),h)$, so both constructions are independent of representatives. No injectivity of the coefficient map on H2 is claimed. [F1, step 1.1, step 1.2, algebra] ∎

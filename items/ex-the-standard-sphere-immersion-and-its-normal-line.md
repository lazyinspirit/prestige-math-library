---
id: ex-the-standard-sphere-immersion-and-its-normal-line
kind: example
title: "The standard sphere immersion and its normal line"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-normal-bundle-of-a-formal-immersion, lem-formal-immersion-gives-the-tangent-normal-bundle-identity, def-formal-immersion-between-smooth-manifolds, def-immersion-submersion-and-constant-rank-map, def-tangent-bundle-as-a-disjoint-union, def-countable-choice, def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]
justified_by: []
external_refs: [rem-the-hairy-ball-theorem-for-even-dimensional-spheres]
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 7 §2 “Obstructions to the existence of embeddings and immersions, the Hirsch–Smale theorem”, printed pp. 226–232 (Theorem 7.5, Corollary 7.6)"
      url: http://math.stanford.edu/~ralph/bookR4.pdf
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery, Ch. 7 §7.4 “The Smale–Hirsch classification of immersions”, printed pp. 142–146 (Theorem 7.35, Proposition 7.39)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
dependency_level: 3
---

## Example

Let $j:S^2\hookrightarrow\mathbb R^3$ be the standard unit sphere inclusion. Then $(j,dj)$ is a formal immersion, and the normal bundle of the formal immersion is $\nu_{dj}=dj(TS^2)^\perp$, the fibrewise orthogonal complement of the tangent planes of $S^2$ in $j^*T\mathbb R^3$. The outward unit normal $N(x)=x$ is a global nonvanishing section, so $\nu_{dj}\cong\varepsilon^1$ is trivial, and the tangent-normal identity gives $$TS^2\oplus\varepsilon^1\;\cong\;j^*T\mathbb R^3=\varepsilon^3,$$ the standard trivialization of the tangent bundle of $S^2$ stabilised by one trivial line. The bundle isomorphism $(v,a)\mapsto v+ax$ therefore trivializes $TS^2\oplus\varepsilon^1$; the inverse images of the standard basis vectors $e_i$ give the global frame $x\mapsto(e_i-\langle e_i,x\rangle x,\langle e_i,x\rangle)$, $i=1,2,3$, while $TS^2$ alone admits no nowhere-zero global section by the hairy-ball theorem, recorded but not proved on this page ([[rem-the-hairy-ball-theorem-for-even-dimensional-spheres]]); hence the extra normal line is essential and the splitting is not a triviality of $TS^2$. This verifies the tangent-normal identity in the first nontrivial even-dimensional case and provides the normal line used in the sphere-eversion computation on the next page.

## Facts & Assumptions

**Given:** The standard unit sphere inclusion $j:S^2\hookrightarrow\mathbb R^3$ and the standard structures on $T\mathbb R^3\cong\mathbb R^3\times\mathbb R^3$ ([[def-tangent-bundle-as-a-disjoint-union]]).

[F1] $(j,dj)$ is a formal immersion whose fibres are injective, and the normal bundle of the formal immersion is $\nu_{dj}=dj(TS^2)^{\perp}$, the orthogonal complement with respect to the standard metric ([[def-formal-immersion-between-smooth-manifolds]], [[def-normal-bundle-of-a-formal-immersion]]).

[L1] The tangent-normal identity gives a smooth bundle isomorphism $TS^2\oplus\nu_{dj}\cong j^*T\mathbb R^3$ ([[lem-formal-immersion-gives-the-tangent-normal-bundle-identity]]), and $j^*T\mathbb R^3\cong\varepsilon^3$ is the trivial rank-three bundle ([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

## Verification

**Proof technique:** direct.

1.1 For $x\in S^2$ the tangent space $T_xS^2$ is the orthogonal complement of the radial line $\mathbb Rx$ in $\mathbb R^3$, and $dj_x$ is the inclusion $T_xS^2\hookrightarrow\mathbb R^3$. Hence the normal line of $dj$ at $x$ is spanned by $x$, and the outward unit normal $N(x):=x$ is a global smooth nonvanishing section of $\nu_{dj}$. [F1, given, algebra]

2.1 A line bundle with a global nonvanishing section is trivial, so $\nu_{dj}\cong\varepsilon^1$; the tangent-normal identity of [L1] then gives $TS^2\oplus\varepsilon^1\cong j^*T\mathbb R^3=\varepsilon^3$, and the isomorphism $(v,a)\mapsto v+ax$ pulls back the standard basis to the three smooth sections $(e_i-\langle e_i,x\rangle x,\langle e_i,x\rangle)$, which are a global frame because their images are a basis in every fibre. [L1, step 1.1] ∎

## Remarks

The hairy-ball comparison in the Example is the recorded external statement [[rem-the-hairy-ball-theorem-for-even-dimensional-spheres]]: $TS^2$ admits no nowhere-zero global section, so it is not trivial. That assertion is not proved here and is not an input to the verification, which establishes only the explicit normal line, stable bundle identity and global frame.

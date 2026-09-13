---
id: prop-direct-sum-dual-hom-and-tensor-representations
kind: proposition
title: Direct-sum, dual, Hom, and tensor representations
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-representation-of-a-lie-algebra, def-direct-sum-of-a-family-of-modules, thm-universal-property-of-module-tensor-products, def-vector-space-of-linear-maps]
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
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §11.2, printed pp. 62–63"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §4.2, printed pp. 50–52"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

Let $(V_i)_{i\in I}$ be representations of $\mathfrak g$, and let $V,W$ be
representations. Then the following formulas define representations:

$$x(v_i)_{i\in I}=(xv_i)_{i\in I},$$

$$ (x\lambda)(v)=-\lambda(xv),$$

$$ (xT)(v)=xT(v)-T(xv),$$

$$x(v\otimes w)=xv\otimes w+v\otimes xw,$$

on $\bigoplus_iV_i$, $V^*$, $\operatorname{Hom}_k(V,W)$, and $V\otimes_kW$,
respectively.

## Facts & Assumptions

**Given:** Representations of one Lie algebra $\mathfrak g$ on all displayed
vector spaces.

[L1] Their operators satisfy $[\rho(x),\rho(y)]=\rho([x,y])$
([[def-representation-of-a-lie-algebra]]).

[L2] A bilinear map induces a unique linear map from a tensor product
([[thm-universal-property-of-module-tensor-products]]).

[L3] Elements of an algebraic direct sum have finite support
([[def-direct-sum-of-a-family-of-modules]]).

## Proof

**Proof technique:** direct.

1.1 The componentwise formula preserves finite support by [L3]. Its commutator is componentwise, so [L1] gives $[x,y](v_i)=(x(yv_i)-y(xv_i))_i$; hence it is a representation, including for an empty family. [L1, L3, algebra]

1.2 For the dual formula, $\bigl(x(y\lambda)-y(x\lambda)\bigr)(v)=\lambda(yxv-xyv)=-\lambda([x,y]v)=([x,y]\lambda)(v)$ by [L1]. Thus the minus sign gives the required bracket action. [L1, algebra]

1.3 On $\operatorname{Hom}_k(V,W)$, expand the commutator of $T\mapsto\rho_W(x)T-T\rho_V(x)$ and its $y$-analogue. The two mixed terms cancel, leaving $\rho_W([x,y])T-T\rho_V([x,y])$, which is the prescribed $[x,y]$-action by [L1]. [L1, algebra]

1.4 For each fixed $x$, the displayed tensor formula is bilinear in $(v,w)$, so [L2] gives a linear endomorphism of $V\otimes W$. Applying the $x$- and $y$-operators successively to a pure tensor produces two mixed terms in each order; they cancel in the commutator, leaving $[x,y]v\otimes w+v\otimes[x,y]w$. Since pure tensors span, this is the representation identity everywhere. [L1, L2, algebra]

2.1 Each construction is linear in $x$ and satisfies the bracket identity, so all four displayed actions are Lie-algebra representations without finite-dimensional assumptions. [step 1.1, step 1.2, step 1.3, step 1.4] ∎

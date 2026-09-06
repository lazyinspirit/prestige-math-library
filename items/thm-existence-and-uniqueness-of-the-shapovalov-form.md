---
id: thm-existence-and-uniqueness-of-the-shapovalov-form
kind: theorem
title: "Existence and uniqueness of the Shapovalov form"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-chevalley-contravariant-form, def-verma-module, thm-pbw-model-of-a-verma-module]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Mrudul Thatte, Category O: Verma's Thesis, Theorem 1.3"
      url: "https://member.ipmu.jp/henry.liu/seminars/s20-category-o/mrudul-notes.pdf"
---

## Statement

There is a unique Chevalley-contravariant bilinear form $S_\lambda$ on
$M(\lambda)$ with $S_\lambda(v_\lambda,v_\lambda)=1$.

## Facts & Assumptions

**Given:** The PBW model [[thm-pbw-model-of-a-verma-module]] and the contravariance convention [[def-chevalley-contravariant-form]].

## Proof

**Proof technique:** direct.

1.1 Triangular PBW defines $p:U(\mathfrak g)\to U(\mathfrak h)$ by retaining the $U(\mathfrak h)$ summand; put $\varphi_\lambda=\operatorname{ev}_\lambda\circ p$.  For $u,w\in U(\mathfrak n^-)$ set $S_\lambda(uv_\lambda,wv_\lambda)=\varphi_\lambda(\tau(u)w)$. [given, construct]

1.2 The PBW model makes $u,w$ unique.  Moreover $p\circ\tau=p$.  If $a$ annihilates $v_\lambda$, then $za$ also annihilates it for every $z\in U(\mathfrak g)$, so its $U(\mathfrak h)$ PBW coefficient evaluates to $0$: $\varphi_\lambda(za)=0$.  Taking $z=\tau(w)$, and then using $p\circ\tau=p$, shows that either argument may be changed by an element annihilating $v_\lambda$; thus the displayed formula descends to $M(\lambda)$. [given, algebra]

1.3 For $x\in U(\mathfrak g)$, the anti-involution identity gives $\varphi_\lambda(\tau(xu)w)=\varphi_\lambda(\tau(u)\tau(x)w)$, which is $S_\lambda(xuv_\lambda,wv_\lambda)=S_\lambda(uv_\lambda,\tau(x)wv_\lambda)$.  Thus the descended form is contravariant, and $S_\lambda(v_\lambda,v_\lambda)=\varphi_\lambda(1)=1$. [given, algebra]

2.1 For any contravariant form, repeatedly move the negative PBW monomial in its first argument to the second.  Its value is therefore forced by its value on $(v_\lambda,v_\lambda)$, so the normalization proves uniqueness. [given, algebra] ∎

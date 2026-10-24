---
id: prop-weyl-length-equals-positive-root-inversion-number
kind: proposition
title: Weyl length equals inversion number
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-length-and-longest-element-of-a-finite-weyl-group, thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, def-open-and-closed-weyl-chambers]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §6, Propositions 2.70 and 2.72 and the discussion of the longest element, printed pp. 168-170"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 22, Theorem 22.14 and Corollary 22.17, printed pp. 120-121"
landmark: false
proof_strategy: direct
---

## Statement

Let $\Phi\subseteq E$ be a reduced crystallographic root system with positive
system $\Phi^{+}$, simple roots $\Delta=\{\alpha_1,\dots,\alpha_r\}$ and Weyl
group $W$, with inversion sets $N(w)$ and lengths $\ell(w)=|N(w)|$
([[def-length-and-longest-element-of-a-finite-weyl-group]]). Then:
1. for every $w\in W$, the length $\ell(w)$ equals the minimum number of
   simple reflections occurring in an expression of $w$ as a product of simple
   reflections;
2. there is a unique longest element $w_0\in W$; it satisfies
   $w_0(\Phi^{+})=\Phi^{-}$ and $\ell(w_0)=|\Phi^{+}|$.

## Facts & Assumptions

**Given:** A reduced crystallographic root system $\Phi$ with positive system $\Phi^{+}$, simple roots $\Delta$, simple reflections $s_i=s_{\alpha_i}$, Weyl group $W$, inversion sets and lengths.

[L2] The chambers are the connected components of the complement of the root hyperplanes; $W$ acts simply transitively on them; each chamber has exactly $r$ walls, and the walls of $C_+$ are the hyperplanes $L_{\alpha_i}$ ([[def-open-and-closed-weyl-chambers]], [[thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers]]).

[L3] A positive-root hyperplane $L_\alpha$ separates $C_+$ from $w(C_+)$ exactly when $w^{-1}\alpha\in\Phi^-$, so the number of separating hyperplanes is $|N(w^{-1})|=|N(w)|=\ell(w)$; here $\alpha\mapsto-w\alpha$ is a bijection from $N(w)$ to $N(w^{-1})$. The negative chamber is $C_-=-C_+=\{x:(x,\alpha)<0\ \forall\alpha\in\Phi^{+}\}$ ([[def-length-and-longest-element-of-a-finite-weyl-group]], [[def-open-and-closed-weyl-chambers]]).

[L4] Every positive root is a nonnegative integral combination of the simple roots, and every root is $\pm$ such a combination ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

## Proof

**Proof technique:** direct.

1.1 A generic segment from a point of $C_+$ to a point of $w(C_+)$ meets exactly the hyperplanes separating the two chambers, each once, and produces a chain $C_+=C_0,\dots,C_m=w(C_+)$. Inductively, if $C_{k-1}=u_{k-1}(C_+)$, the crossed wall is $u_{k-1}(L_{\alpha_{i_k}})$ for some simple root $\alpha_{i_k}$, and the adjacent chamber is $C_k=u_{k-1}s_{i_k}(C_+)$. Thus $C_m=u_m(C_+)$ for $u_m=s_{i_1}\cdots s_{i_m}$; simple transitivity and $C_m=w(C_+)$ give $u_m=w$, while [L3] gives $m=\ell(w)$. Conversely, given any expression $w=s_{i_1}\cdots s_{i_l}$, the chain $C_k=s_{i_1}\cdots s_{i_k}(C_+)$ crosses one wall at each step, so at most $l$ hyperplanes separate its endpoints and $\ell(w)\le l$. Hence $\ell(w)$ is the minimum number of simple reflections in an expression of $w$. [L2, L3, algebra]

1.2 The simple transitivity of $W$ on chambers applied to the pair $(C_+,C_-)$ gives a unique element $w_0\in W$ with $w_0(C_+)=C_-$. [L2, algebra]

2.1 For every positive root $\alpha$, $w_0(\alpha)$ is negative: if $x\in C_+$ then $w_0x\in C_-$ and $(w_0x,w_0\alpha)=(x,\alpha)>0$; a root $\beta$ satisfying $(y,\beta)>0$ for all $y\in C_-=-C_+$ is negative, because writing $y=-x$ with $x\in C_+$ gives $(x,-\beta)=(y,\beta)>0$ and hence $-\beta\in\Phi^+$ by [L4] and the definition of $C_+$. Hence $w_0(\Phi^{+})\subseteq\Phi^{-}$; since $w_0$ is a bijection of the finite set $\Phi$ and $|\Phi^{+}|=|\Phi^{-}|$, equality holds, $N(w_0)=\Phi^{+}$, and $\ell(w_0)=|\Phi^{+}|$. [L3, L4, step 1.2, algebra]

3.1 Every $w\in W$ satisfies $N(w)\subseteq\Phi^{+}$, hence $\ell(w)\le|\Phi^{+}|=\ell(w_0)$; so $w_0$ is a longest element. If $w$ is also longest then $\ell(w)=|\Phi^{+}|$ forces $N(w)=\Phi^{+}$, that is $w(\Phi^{+})=\Phi^{-}$; then for every $x\in C_+$ and every positive root $\alpha$ one has $(wx,\alpha)=(x,w^{-1}\alpha)<0$, because $w^{-1}\alpha\in\Phi^{-}$ and $x\in C_+$ has negative inner product with every negative root; hence $wx\in C_-$, that is $w(C_+)=C_-$; simple transitivity of $W$ on chambers then gives $w=w_0$, so the longest element is unique. [L2, L3, step 2.1, algebra] ∎

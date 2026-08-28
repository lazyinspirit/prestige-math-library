---
id: thm-convergence-in-measure-limits-are-unique-almost-everywhere
kind: theorem
title: "Convergence in measure determines the limit almost everywhere"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-measure, def-measure-null-set-and-almost-everywhere, thm-finite-and-countable-subadditivity-of-measures]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.30"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space and let
$f_n,f,g : X \to \mathbb R$ be measurable. If $f_n \to f$ in measure and
$f_n \to g$ in measure, then $f=g$ $\mu$-almost everywhere.
## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$, measurable functions $f_n,f,g : X \to \mathbb R$, and convergence in measure of $(f_n)$ to both $f$ and $g$.

[L1] Convergence in measure means that for every real $\varepsilon>0$, $\mu(\{|f_n-f|>\varepsilon\}) \to 0$. ([[def-convergence-in-measure]])

[L2] A property holds $\mu$-almost everywhere when its exceptional set is contained in a measurable $\mu$-null set. ([[def-measure-null-set-and-almost-everywhere]])

[L3] For measurable $(E_k)$ one has $\mu(\bigcup_k E_k)\le\sum_{k=0}^\infty\mu(E_k)$, and in particular $\mu(E_0\cup E_1)\le\mu(E_0)+\mu(E_1)$. ([[thm-finite-and-countable-subadditivity-of-measures]])

## Proof

**Proof technique:** direct.

1.1 For $m \ge 1$ put $E_m:=\{|f-g|>1/m\}$, and for $n \in \mathbb N$ put $A_{n,m}:=\{|f_n-f|>1/(2m)\}$ and $B_{n,m}:=\{|f_n-g|>1/(2m)\}$. If $x \in E_m$ and $x \notin A_{n,m}\cup B_{n,m}$, then $|f(x)-g(x)|\le |f(x)-f_n(x)|+|f_n(x)-g(x)|\le 1/m$, a contradiction. So $E_m \subseteq A_{n,m}\cup B_{n,m}$ for every $n,m$. [given, L1, algebra]
2.1 Fix $m \ge 1$ and let $\eta>0$. By [L1] choose $n$ so large that $\mu(A_{n,m})<\eta/2$ and $\mu(B_{n,m})<\eta/2$. Then step 1.1 and [L3] give $\mu(E_m)\le\mu(A_{n,m})+\mu(B_{n,m})<\eta$. Since $\eta$ was arbitrary, $\mu(E_m)=0$. [step 1.1, L1, L3]
3.1 If $f(x)\ne g(x)$, then $|f(x)-g(x)|>1/m$ for some $m \ge 1$, so $\{f\ne g\}=\bigcup_{m=1}^\infty E_m$. Step 2.1 makes every $E_m$ null, hence [L3] gives $\mu(\{f\ne g\})=0$. By [L2], $f=g$ $\mu$-almost everywhere. ∎ [step 2.1, L2, L3]

---
id: def-c-sequences-and-minimal-walk-traces-on-omega-one
kind: definition
title: C-sequences and the upper and lower traces of minimal walks on omega-one
status: draft
origin: pipeline
deps:
  - def-cofinality
  - def-ordinal
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Moore, A solution to the L space problem, Section 2, printed pp. 6--8"
      url: https://arxiv.org/pdf/math/0501524
---

## Definition

Work in ZFC.  A **locally finite $C$-sequence on $\omega_1$** is a sequence
$\langle C_\gamma:\gamma<\omega_1\rangle$ such that

- $C_0=\varnothing$;
- if $\gamma>0$, then $C_\gamma\subseteq\gamma$ is cofinal in $\gamma$;
- $C_\gamma\cap\eta$ is finite whenever $\eta<\gamma$; and
- $0\in C_\gamma$ whenever $\gamma>0$.

At a successor one may and shall take
$C_{\eta+1}=\{0,\eta\}$, read as $\{0\}$ when $\eta=0$.  At a nonzero
countable limit $\gamma$, choose a strictly increasing cofinal $\omega$-sequence
and adjoin $0$.  The choice, simultaneously for all limit
$\gamma<\omega_1$, is the use of [[def-axiom-of-choice]] in this definition;
the definitions made from a fixed $C$-sequence use no further choice.

Fix such a sequence.  For $\alpha<\beta<\omega_1$, the **minimal walk from
$\beta$ down to $\alpha$** is the finite decreasing sequence

$$\beta=\beta_0>\beta_1>\cdots>\beta_{n-1}>\beta_n=\alpha,$$

where, as long as $\beta_i>\alpha$,

$$\beta_{i+1}=\min(C_{\beta_i}\setminus\alpha)=\min\{\xi\in C_{\beta_i}:\alpha\leq\xi\}.$$

The displayed set is nonempty: cofinality supplies an element at a limit
stage, and the predecessor belongs to the chosen successor set.  Its minimum
is below $\beta_i$.  If the recursion never reached $\alpha$, it would give an
infinite strictly decreasing sequence of ordinals, contrary to the
well-ordering in [[def-ordinal]].  Thus $n<\omega$ and the walk is well defined.

Its **upper trace** is

$$\operatorname{Tr}(\alpha,\beta)=\{\beta_i:i<n\},$$

with $\operatorname{Tr}(\alpha,\alpha)=\varnothing$.  For $i<n$ put

$$m_i(\alpha,\beta)=\begin{cases}\max\!\left(\displaystyle\bigcup_{j\leq i}(C_{\beta_j}\cap\alpha)\right),&\alpha>0,\\ 0,&\alpha=0.\end{cases}$$

The union in the first line is a nonempty finite set: it contains $0$, and it
is a finite union of finite initial intersections.  The **lower trace** is

$$L(\alpha,\beta)=\{m_i(\alpha,\beta):i<n\},\qquad L(\alpha,\alpha)=\varnothing,$$

listed in its inherited nondecreasing order when multiplicities along the walk
matter.  Equivalently, with
$\beta' =\min(C_\beta\setminus\alpha)$ and
$m=\max(C_\beta\cap\alpha)$ for $\alpha>0$,

$$L(\alpha,\beta)=\bigl(L(\alpha,\beta')\cup\{m\}\bigr)\setminus m;$$

here an ordinal $m$ is the set of its predecessors, so subtraction discards
earlier values below the new running maximum.  The explicit $\alpha=0$
convention avoids the undefined expression $\max\varnothing$ and gives
$L(0,\beta)=\{0\}$ for $\beta>0$.

For finite sets of ordinals, $a<b$ means that every member of $a$ is below
every member of $b$.  This convention will be used in the concatenation
statements below; it is not the comparison of their cardinalities.

---
id: def-prikry-forcing-and-direct-extension
kind: definition
title: Prikry forcing and its direct-extension order
status: draft
origin: pipeline
deps:
  - def-lc-complete-ultrafilters-and-measurable-cardinals
  - def-forcing-preorder-compatibility-and-filter
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing lecture notes, Section 9.2, Definition 9.9"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Definition

Work in ZFC. Let $\kappa$ be an uncountable cardinal and let $U$ be a normal
measure on $\kappa$ in the sense of
[[def-lc-complete-ultrafilters-and-measurable-cardinals]]. A **Prikry
condition** is a pair $p=(s_p,A_p)$ such that

- $s_p=\langle s_p(0),\ldots,s_p(n-1)\rangle$ is a finite strictly increasing
  sequence of ordinals below $\kappa$;
- $A_p\in U$; and
- if $n>0$, then $s_p(n-1)<\min A_p$.

The empty stem imposes no maximum condition. The first coordinate $s_p$ is the
**stem**, and $A_p$ is the **upper part**.

For $q=(s_q,A_q)$ and $p=(s_p,A_p)$, write $q\le p$ when $q$ is stronger than
$p$, meaning that $s_q$ end-extends $s_p$, $A_q\subseteq A_p$, and every entry
of $s_q$ after $s_p$ belongs to $A_p$. This is the stronger-below convention of
[[def-forcing-preorder-compatibility-and-filter]]. Write

$$q\le^*p$$

and call $q$ a **direct extension** of $p$ when $q\le p$ and $s_q=s_p$.

Reflexivity is immediate. If $r\le q\le p$, then $s_r$ end-extends $s_p$ and
$A_r\subseteq A_p$. An entry added by $r$ either was already added by $q$ and
therefore lies in $A_p$, or lies in $A_q\subseteq A_p$. Thus $r\le p$, so this
is a forcing preorder. Likewise, equality of stems and inclusion of upper
parts show that $\le^*$ is reflexive and transitive. For a fixed stem, any two
conditions are compatible: $(s,A\cap B)$ is a common extension, since a proper
filter is closed under finite intersections.

No choice is needed to form a condition or compare two fixed conditions. The
dependency [[def-axiom-of-choice]] records the ambient ZFC hypothesis used for
cardinal arithmetic and for the simultaneous measure-one selections in later
results on this page; it is not being inferred from the existence of $U$.

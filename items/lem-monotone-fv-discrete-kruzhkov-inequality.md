---
id: lem-monotone-fv-discrete-kruzhkov-inequality
kind: lemma
title: Discrete Kruzhkov inequality for a monotone finite-volume scheme
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps:
  [
    def-monotone-finite-volume-entropy-scheme,
    lem-monotone-fv-update-preserves-range-and-tvd,
    def-kruzhkov-entropy-solution
  ]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jérôme Droniou, A beginner’s course in finite volume approximation of
        scalar conservation laws, complete lecture note"
      url: "https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf"
      locator: "Proposition 2.3.6 and its proof, §2.3.2, PDF pp. 21–22: the discrete
        entropy flux built from componentwise maxima/minima."
    - title: "Siddhartha Mishra, Ulrik S. Fjordholm and Rémi Abgrall, Numerical
        Methods for Conservation Laws, ETH lecture notes"
      url: "https://metaphor.ethz.ch/x/2019/hs/401-4671-00L/literature/mishra_hyperbo\
        lic_pdes.pdf"
      locator: "§4.5.2, Proposition 4.10, PDF pp. 50–51: the numerical entropy flux
        and its derivation from monotonicity."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $U^n$ be a scheme from
[[def-monotone-finite-volume-entropy-scheme]], satisfying the full
invariant-interval CFL bound. For $k\in\mathbb R$ define
$$G_k(a,b):=F(a\vee k,b\vee k)-F(a\wedge k,b\wedge k),\qquad q_k(s):=\operatorname{sgn}(s-k)(f(s)-f(k)),$$
where $q_k$ is the Kruzhkov entropy flux of
[[def-kruzhkov-entropy-solution]]. Then $G_k(s,s)=q_k(s)$ for every $s\in I$,
and for every $j\in\mathbb Z$, $n\ge0$ and $k\in\mathbb R$,
$$|U_j^{n+1}-k|-|U_j^n-k|+\lambda\bigl(G_k(U_j^n,U_{j+1}^n)-G_k(U_{j-1}^n,U_j^n)\bigr)\le0.$$

## Facts & Assumptions

**Given:** The full-line finite-volume recurrence with monotone consistent flux $F$, invariant interval $I=[a_-,a_+]$, the full invariant-interval CFL bound, and an arbitrary entropy level $k\in\mathbb R$.

[F1] The update is $U_j^{n+1}=H(U_{j-1}^n,U_j^n,U_{j+1}^n)$; $H$ is coordinatewise nondecreasing on $I^3$ and $H(s,s,s)=s$ for $s\in I$ ([[def-monotone-finite-volume-entropy-scheme]], [[lem-monotone-fv-update-preserves-range-and-tvd]]).

[F2] Consistency gives $F(s,s)=f(s)$, and the Kruzhkov flux is $q_k(s)=\operatorname{sgn}(s-k)(f(s)-f(k))$ with $\operatorname{sgn}(0)=0$ ([[def-monotone-finite-volume-entropy-scheme]], [[def-kruzhkov-entropy-solution]]).

## Proof

1.1 If $s\ge k$, then $s\vee k=s$ and $s\wedge k=k$, so $G_k(s,s)=f(s)-f(k)=q_k(s)$. If $s<k$, then $s\vee k=k$ and $s\wedge k=s$, so $G_k(s,s)=f(k)-f(s)=q_k(s)$. [F2, algebra]

2.1 First suppose $k\in I$. Put $X=(U_{j-1}^n,U_j^n,U_{j+1}^n)$ and let $X^+$ and $X^-$ be its coordinatewise maximum and minimum with $(k,k,k)$. Both triples lie in $I^3$. By [F1], the two numbers $H(X)$ and $H(k,k,k)=k$ lie between $H(X^-)$ and $H(X^+)$; therefore $|H(X)-k|\le H(X^+)-H(X^-).$ Expanding the definition of $H$, the right side is $|U_j^n-k|-\lambda\bigl(G_k(U_j^n,U_{j+1}^n)-G_k(U_{j-1}^n,U_j^n)\bigr),$ which gives the claimed inequality after rearrangement. [F1, step 1.1, given, algebra]

3.1 If $k<a_-$, every state is above $k$ by the range assertion in [F1]. Then $|U_j^n-k|=U_j^n-k$ and $G_k(a,b)=F(a,b)-F(k,k)$ for state pairs; substituting the scheme recurrence makes the displayed left side zero. If $k>a_+$, every state is below $k$, so $|U_j^n-k|=k-U_j^n$ and $G_k(a,b)=F(k,k)-F(a,b)$; substitution again gives zero. The cases $k=a_-$ and $k=a_+$ are already covered by step 2.1. [F1, step 2.1, algebra] ∎
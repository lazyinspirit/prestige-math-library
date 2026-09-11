---
id: "def-fibration-connecting-homomorphism"
kind: "definition"
title: "Fibration connecting map"
deps: ["def-higher-homotopy-group-by-based-cubes", "def-relative-homotopy-group", "def-fiber-and-fiber-homotopy-equivalence", "prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter7 pp49–56; Chapter9 §3 p66 and §5 pp68–69"
    - title: "Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem4.41 pp375–377; Hopf example pp377–378; §4.3 pp405–410"
status: published
origin: "pipeline"
justified_by: ["lem-the-fibration-connecting-map-is-independent-of-lift-and-representative"]
---

## Definition

Let $p:(E,e_0)\to(B,b_0)$ be a based Serre fibration and let $F=p^{-1}(b_0)$, with basepoint $e_0$, as in [[def-fiber-and-fiber-homotopy-equivalence]]. For $n\ge1$, represent $[b]\in\pi_n(B,b_0)$ by a based cube $b:I^n\to B$ as in [[def-higher-homotopy-group-by-based-cubes]]. Write $u\in I^{n-1}$ and $t\in I$ for its coordinates. The distinguished face is $t=0$; the union $J$ of all other faces is the relative convention of [[def-relative-homotopy-group]].

Apply [[prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace]] to the homotopy $b(u,1-s)$, starting with the constant $e_0$ lift at $s=0$ and keeping $u\in\partial I^{n-1}$ fixed. Reversing $s$ gives a lift $\widetilde b:I^n\to E$ with $p\widetilde b=b$ and $\widetilde b|_J=e_0$. Its face $a(u)=\widetilde b(u,0)$ lies in $F$ and is based on $\partial I^{n-1}$.

The **connecting map** is
$$\partial_p[b]=[a]\in\pi_{n-1}(F,e_0)\quad(n\ge2).$$
For $n=1$ it is the path component $[\widetilde b(0)]\in\pi_0(F,e_0)$. Thus a loop is lifted with its **terminal** point fixed to $e_0$, and the initial component is recorded. This orientation matters: it need not equal the endpoint component of a lift with initial point $e_0$.

Independence of representative and lift and the homomorphism property for $n\ge2$ are proved in the next lemma, the declared justifier. No group structure on $\pi_0(F)$ is assumed. Only finite cubical relative lifting is used here, so AC is unnecessary. The fiber is nonempty because $e_0$ is specified.

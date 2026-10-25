---
id: thm-transitive-imprimitive-groups-embed-in-an-imprimitive-wreath-product
kind: theorem
title: "A transitive imprimitive action embeds modulo its kernel in an imprimitive wreath product"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-block-and-block-system-for-a-group-action, def-group-action, def-imprimitive-wreath-product-of-permutation-groups]
justified_by: []
aliases: []
proof_strategy: constructive
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "P. J. Cameron, Permutation Groups, Chapter 2"
      url: "https://webspace.maths.qmul.ac.uk/p.j.cameron/pgbook/"
pipeline_run: null
---

## Statement

Let $G$ act transitively on $\Omega$, and let $B \subseteq \Omega$ be a
nontrivial block. Put
$$\Sigma := \{\, g \cdot B : g \in G \,\}, \qquad G_B := \{\, g \in G : g \cdot B = B \,\}.$$
Let $K$ be the permutation group induced by $G$ on $\Sigma$, and let $H$ be the
permutation group induced by $G_B$ on $B$.

Choose for each $C \in \Sigma$ an element $t_C \in G$ with
$$t_C \cdot B = C, \qquad t_B = e.$$
Then there is a homomorphism
$$\Phi:G \longrightarrow H \wr_\Sigma K$$
whose kernel is exactly the kernel of the given action on $\Omega$.

In particular, if the action of $G$ on $\Omega$ is faithful, then $\Phi$ is an
embedding.

## Facts & Assumptions

**Given:** A transitive action of $G$ on $\Omega$, a block $B \subseteq \Omega$, the block system $\Sigma := \{\, g \cdot B : g \in G \,\}$, and a choice of $t_C \in G$ with $t_C \cdot B = C$ and $t_B = e$.

[L1] A block $B$ satisfies: for every $g \in G$, either $g \cdot B = B$ or $(g \cdot B) \cap B = \varnothing$ ([[def-block-and-block-system-for-a-group-action]]).

[L2] The imprimitive wreath product $H \wr_\Sigma K$ is the semidirect product $H^\Sigma \rtimes K$ acting on $B \times \Sigma$ by $$(f,k) \cdot (b,C) = \bigl(f(k \cdot C) \cdot b,\ k \cdot C\bigr).$$ ([[def-imprimitive-wreath-product-of-permutation-groups]]).

## Proof

**Proof technique:** constructive.

1.1 For each $g \in G$, let $k_g$ be the permutation of $\Sigma$ induced by $g$, so $k_g(C) = g \cdot C$. For each $C \in \Sigma$, the element $t_C^{-1} g t_{g^{-1} \cdot C}$ stabilizes $B$ setwise because $$t_C^{-1} g t_{g^{-1} \cdot C} \cdot B = t_C^{-1} g \cdot (g^{-1} \cdot C) = t_C^{-1} \cdot C = B.$$ Let $f_g(C) \in H$ be the induced permutation of $B$ defined by this element. [L1, construct]

2.1 Define $\Phi(g) := (f_g,k_g)$. For $C \in \Sigma$, the function component of $\Phi(g)\Phi(h)$ at $C$ is $f_g(C)\,f_h(g^{-1} \cdot C)$, while $$t_C^{-1}gh\,t_{(gh)^{-1} \cdot C} = \bigl(t_C^{-1} g t_{g^{-1} \cdot C}\bigr)\bigl(t_{g^{-1} \cdot C}^{-1} h t_{h^{-1}g^{-1} \cdot C}\bigr),$$ so it induces the same permutation of $B$ as $f_{gh}(C)$. Also $k_{gh} = k_g k_h$. Hence $\Phi(gh) = \Phi(g)\Phi(h)$. [step 1.1, L2, algebra]

3.1 Identify $\Omega$ with $B \times \Sigma$ by $\Psi(b,C) := t_C \cdot b$. Then for every $g \in G$ one has $$\Psi\bigl(\Phi(g) \cdot (b,C)\bigr) = t_{g \cdot C} \cdot \bigl(f_g(g \cdot C) \cdot b\bigr) = g \cdot (t_C \cdot b) = g \cdot \Psi(b,C).$$ So $\Phi(g)=1$ exactly when $g$ fixes every point of $\Omega$. [step 1.1, step 2.1, L2, algebra]

4.1 Step 3.1 shows that $\ker \Phi$ is the kernel of the given action. Therefore a faithful action makes $\ker \Phi = 1$, so in that case $\Phi$ is an embedding into $H \wr_\Sigma K$. [step 3.1, discharge-construct] ∎

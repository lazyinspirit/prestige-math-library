---
id: thm-a-family-natural-in-the-parameter-factors-through-the-parametrised-end
kind: theorem
title: "A family into a parametrised end is natural, or dinatural, in the parameter exactly when its composite with the counit is"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-a-chosen-family-of-ends-assembles-into-a-functor-of-the-parameters, def-parametrised-end-and-parametrised-coend, def-end-and-coend, def-natural-transformation, def-wedge-and-cowedge, def-opposite-category, def-product-category]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), (2.6)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
pipeline_run: null
---

## Statement

Let $T:\mathcal P\times\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ be
a functor with a chosen parametrised end
([[def-parametrised-end-and-parametrised-coend]]), with counit components
$\omega^{p}_c:E(p)\to T(p,c,c)$ and carrying the functor structure
$E:\mathcal P\to\mathcal D$ of
[[thm-a-chosen-family-of-ends-assembles-into-a-functor-of-the-parameters]].

**Natural clause.** Let $X:\mathcal P\to\mathcal D$ be a functor and let
$\phi_p:X(p)\to E(p)$ be a family indexed by the objects of $\mathcal P$. Then
a family into a parametrised end is natural in the parameter exactly when its
composite with the counit is: $\phi$ is a natural transformation
$X\Rightarrow E$ ([[def-natural-transformation]]) if and only if, for every
object $c$ of $\mathcal C$, the family $\omega^{p}_c\circ\phi_p:X(p)\to T(p,c,c)$
is natural in $p$.

**Dinatural clause.** Suppose instead the parameter category is
$\mathcal P=\mathcal Q^{\mathrm{op}}\times\mathcal Q$
([[def-opposite-category]], [[def-product-category]]), let $Y$ be an object of
$\mathcal D$, and let $\psi_q:Y\to E(q,q)$ be a family indexed by the objects of
$\mathcal Q$. Then $\psi$ is a wedge from $Y$ to $E$
([[def-wedge-and-cowedge]]) if and only if, for every object $c$ of
$\mathcal C$, the family $\omega^{(q,q)}_c\circ\psi_q:Y\to T(q,q,c,c)$ is a
wedge from $Y$ to $T(-,-,c,c)$.

## Facts & Assumptions

**Given:** A functor $T$ on $\mathcal P\times\mathcal C^{\mathrm{op}}\times\mathcal C$ with a chosen parametrised end and its functor structure $E$; for the natural clause a functor $X:\mathcal P\to\mathcal D$ and a family $\phi_p:X(p)\to E(p)$; for the dinatural clause a parameter category of the form $\mathcal Q^{\mathrm{op}}\times\mathcal Q$, an object $Y$ and a family $\psi_q:Y\to E(q,q)$.

[F1] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge, so a wedge factors through a terminal one by exactly one morphism ([[def-end-and-coend]]).

[F2] A wedge from $d$ to $T$ is a dinatural transformation from a constant functor to $T$: a family $\omega_c:d\to T(c,c)$ with $T(1_c,f)\circ\omega_c=T(f,1_{c'})\circ\omega_{c'}$; precomposing a wedge with a morphism of the vertex again gives a wedge ([[def-wedge-and-cowedge]]).

[F4] A parametrised end of $T$ is a choice, for every object $p$ of the parameter category, of an end taken in the two dinatural variables with the remaining variables held fixed ([[def-parametrised-end-and-parametrised-coend]]).

[L1] A chosen parametrised end carries exactly one functor structure making every counit component natural in the parameter, characterised by $\omega^{p'}_c\circ E(u)=T(u,1_c,1_c)\circ\omega^{p}_c$ ([[thm-a-chosen-family-of-ends-assembles-into-a-functor-of-the-parameters]]).

[F3] A natural transformation $\alpha:F\Rightarrow G$ is a family $\alpha_A:FA\to GA$ such that every $f:A\to B$ satisfies the naturality equation $Gf\circ\alpha_A=\alpha_B\circ Ff$ ([[def-natural-transformation]]).

[F5] A morphism $(q,q)\to(q,q')$ of $\mathcal Q^{\mathrm{op}}\times\mathcal Q$ is a pair whose first coordinate is a morphism of $\mathcal Q^{\mathrm{op}}$ and whose second is a morphism of $\mathcal Q$, with componentwise composition $(f',g')\circ(f,g)=(f'\circ f,g'\circ g)$ ([[def-product-category]]).

[F6] The opposite category has the same objects and reverses every morphism: $\mathcal C^{\mathrm{op}}(A,B)=\mathcal C(B,A)$ ([[def-opposite-category]]).

## Proof

**Proof technique:** direct.

1.1 Fix $u:p\to p'$ and an object $c$ of $\mathcal C$. The two morphisms $X(p)\to E(p')$ at issue for the natural clause are $\phi_{p'}\circ X(u)$ and $E(u)\circ\phi_p$, and their composites with $\omega^{p'}_c$ are $(\omega^{p'}_c\phi_{p'})\circ X(u)$ and, by the defining equation of [L1], $T(u,1_c,1_c)\circ(\omega^{p}_c\phi_p)$. Two morphisms $Z\to E(p')$ whose composites with $\omega^{p'}_c$ agree for every $c$ are equal, because the common composite family is the terminal wedge precomposed with a morphism, hence a wedge, and it has exactly one factorisation through $E(p')$. [F1, F2, F4, L1]

2.1 For the forward direction of the natural clause, suppose $\phi$ is natural in $p$. Then for every $c$ the family $\omega^{\bullet}_c\phi_{\bullet}$ is the composite of the natural family $\phi$ with the family $\omega^{\bullet}_c$, which is natural by [L1]; a composite of two natural families is natural by the naturality equation of [F3] applied twice, so $\omega^{\bullet}_c\phi_{\bullet}$ is natural in $p$. [F3, L1, step 1.1]

2.2 For the converse direction of the natural clause, suppose every $\omega^{\bullet}_c\phi_{\bullet}$ is natural in $p$. Its naturality equation at $u$ reads $T(u,1_c,1_c)\circ(\omega^{p}_c\phi_p)=(\omega^{p'}_c\phi_{p'})\circ X(u)$, so by step 1.1 the morphisms $\phi_{p'}X(u)$ and $E(u)\phi_p$ have the same composite with $\omega^{p'}_c$ for every $c$ and are therefore equal. Since $u$ was arbitrary, $\phi$ is natural in the parameter. [F1, F3, L1, step 1.1]

3.1 For the dinatural clause, fix $u:q\to q'$ in $\mathcal Q$. The wedge equation for $\psi$ at $u$ is $E(1_q,u)\circ\psi_q=E(u,1_{q'})\circ\psi_{q'}$, an equation between morphisms $Y\to E(q,q')$, where $(1_q,u)$ and $(u,1_{q'})$ are the two morphisms of $\mathcal Q^{\mathrm{op}}\times\mathcal Q$ that the wedge equation names. Composing with $\omega^{(q,q')}_c$ and applying the defining equation of [L1] at each of them turns the two sides into $T(1_q,u,1_c,1_c)\circ(\omega^{(q,q)}_c\psi_q)$ and $T(u,1_{q'},1_c,1_c)\circ(\omega^{(q',q')}_c\psi_{q'})$, whose equality for every $u$ is exactly the wedge equation for the family $\omega^{(\bullet,\bullet)}_c\psi_{\bullet}$ over $T(-,-,c,c)$. So the wedge equation for $\psi$ implies the one downstairs by composition, and conversely if it holds downstairs for every $c$ then the two morphisms of the wedge equation for $\psi$ agree after composition with every $\omega^{(q,q')}_c$, hence are equal by step 1.1. [F1, F2, F5, F6, L1, step 2.2] ∎

## Remarks

Only the converse directions have content, and what they spend is the uniqueness half of the end's universal property rather than its existence half: two morphisms into an end that agree after composition with every counit component are equal. The forward directions are composition, and would hold for any chosen family of objects with a counit natural in the parameter.

The dinatural clause is the step that the Fubini theorem spends. There the parameter is itself the pair of variables in which the outer end is taken, so what has to be transported across the two orders of integration is the wedge condition in that parameter rather than naturality.

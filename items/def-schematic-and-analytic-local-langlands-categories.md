---
id: def-schematic-and-analytic-local-langlands-categories
kind: definition
title: "Schematic and analytic automorphic categories"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ian Gleason, Linus Hamann, Alexander B. Ivanov, João Lourenço, and Konrad Zou, On the Schematic and Analytic Constructions of the Local Langlands Category, §§1.2.1–1.2.2"
      url: "https://arxiv.org/pdf/2606.02799v1"
verification:
  precheck: n/a
---

## Definition

Let $E$ be a complete discretely valued field with finite residue field
$\mathbb F_q$ of characteristic $p$, let $\ell\ne p$, let $\Lambda$ be a
$\mathbb Z_\ell$-algebra killed by a power of $\ell$, and let $G/E$ be a
connected reductive group. Here reductive means smooth, connected, affine, and
with trivial connected unipotent radical; **quasi-split** means that $G$
contains an $E$-defined Borel subgroup. For a perfect $\mathbb F_q$-algebra
$R$, let $W_{\mathcal O_E}(R)$ be the $\mathcal O_E$-Witt-vector ring and put
$LG(R):=G(W_{\mathcal O_E}(R)[1/\pi_E])$, where $\pi_E$ is a uniformizer of
$E$. The arithmetic $q$-power Frobenius $\phi$ of $R$ induces an automorphism
of $LG$. The **Kottwitz stack of $G$-isocrystals** is the quotient stack
$B(G):=[LG/\operatorname{Ad}_{\phi}LG]$ for the $\phi$-conjugation action.
Write $\operatorname{Shv}_{!,\Lambda}(B(G))$ for Zhu's category of étale
!‑sheaves of $\Lambda$-modules on this schematic stack.

For a perfectoid affinoid $\operatorname{Spa}(R,R^+)$ over $E$, choose a
topologically nilpotent element $\varpi\in R^+$ that is invertible in $R$;
write $[\varpi]$ for its Teichmüller lift. Its relative Fargues–Fontaine curve
is
$$X_{\mathrm{FF},R}:=(\operatorname{Spa}(W_{\mathcal O_E}(R^+))\setminus V(\pi_E[\varpi]))/\phi,$$
where $\phi$ is induced by arithmetic $q$-power Frobenius. The analytic moduli
stack $\operatorname{Bun}_G$ assigns to this affinoid the groupoid of
$G$-bundles on $X_{\mathrm{FF},R}$.

For a strictly totally disconnected perfectoid space $X$ in the sense of the
analytic étale site, let $D(X_{\acute et},\Lambda)$ be the derived category of
étale sheaves of $\Lambda$-modules. The Fargues–Scholze analytic sheaf
category $D^{\mathrm{an}}_\Lambda(X)$ on an analytic stack $X$ is the left
Kan extension of $D(-_{\acute et},\Lambda)$ along the Yoneda embedding of
strictly totally disconnected perfectoid spaces into analytic stacks. The
**schematic automorphic category** is
$\operatorname{Shv}_{!,\Lambda}(B(G))$ and the **analytic automorphic
category** is $D^{\mathrm{an}}_\Lambda(\operatorname{Bun}_G)$.

## Definition references

[Ian Gleason, Linus Hamann, Alexander B. Ivanov, João Lourenço, and Konrad Zou, *On the Schematic and Analytic Constructions of the Local Langlands Category*, Definitions 1.2.1–1.2.2](https://arxiv.org/pdf/2606.02799v1)

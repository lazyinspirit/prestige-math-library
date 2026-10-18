---
id: def-hh-affine-hecke-bernstein-presentation
kind: definition
title: "The formal Bernstein presentation for a reduced based root datum"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-hh-affine-hecke-algebra-from-root-datum, def-abstract-root-datum-and-its-weyl-group, def-hh-universal-coxeter-hecke-parameters-and-presentation, lem-hh-root-datum-affine-geometry-and-wall-parameters]
justified_by: [lem-hh-affine-hecke-bernstein-quotients-are-well-defined]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Maarten Solleveld, Affine Hecke Algebras and Their Representations"
      url: "https://arxiv.org/pdf/2009.03007"
      locator: "§1.3, Definition 1.6, PDF pp. 9–10, and §1.4, Theorems 1.8 and 1.10, PDF pp. 10–12: root-data Bernstein relations and their Iwahori–Matsumoto comparison."
    - title: "Dan Ciubotaru, Tutorial on Affine Hecke Algebras"
      url: "https://imsarchives.nus.edu.sg/oldwww/Programs/016theory/files/dan.pdf"
      locator: "§3, Theorem 3.1, PDF p. 5: Bernstein–Lusztig cross-relations, including the alpha-in-2X case."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $R=(X,\Phi,Y,\Phi^\vee,\Delta)$ be as in [[def-abstract-root-datum-and-its-weyl-group]], with finite Weyl group $W_0$. Use the finite simple-reflection set $S_0=\{s_\alpha:\alpha\in\Delta\}$ specified in [[def-hh-affine-hecke-algebra-from-root-datum]], where $S_0$ generates $W_0$ and is contained in $S_{\mathrm{aff}}$. For $s,t\in S_0$, let $m(s,t)$ be the order of $st$ in $W_0$, which is finite because $W_0$ is finite. The group algebra $\mathbb C[Y]$ is the complex vector space with basis $\{\theta_y:y\in Y\}$ and multiplication $\theta_y\theta_z=\theta_{y+z}$; its identity is $\theta_0$. The simple reflection corresponding to $\alpha\in\Delta$ acts on $Y$ by $s_\alpha(y)=y-\langle\alpha,y\rangle\alpha^\vee$.

Write $2X=\{2x:x\in X\}$. For each simple root $\alpha\in\Delta\cap2X$, also supply a positive scalar $v'_\alpha$; it is the second parameter in the doubled-root rank-one Bernstein relation. This additional scalar is formal input to the presentation. To compare this presentation with a specified $\mathcal H_{\mathrm{IM}}(R,q)$, its parameters must be **attached**: require $v'_\alpha=v(H_{\alpha,1})$, where $v(H)$ is the positive square root of the parameter of its wall reflection, well defined by [[lem-hh-root-datum-affine-geometry-and-wall-parameters]]. The finite parameter is already $v_\alpha=v(H_{\alpha,0})$. Without this tie one is defining a formal Bernstein algebra, not asserting comparison with the fixed $q$. When $\alpha\notin2X$, no second parameter is used; the wall-parameter lemma proves the two wall classes have equal parameters.

Define the **formal Bernstein algebra** $\mathcal B(R,v,v')$ as the quotient of the free associative $\mathbb C$-algebra on $\{\theta_y:y\in Y\}$ and $\{N_s:s\in S_0\}$ by $\theta_0=1$, $\theta_y\theta_z=\theta_{y+z}$ for $y,z\in Y$, the finite Hecke relations, and the following cross-relation for each $\alpha\in\Delta$ and $y\in Y$. Here $v_\alpha:=v_{s_\alpha}=\sqrt{q_{s_\alpha}}>0$ from [[def-hh-affine-hecke-algebra-from-root-datum]], and the finite Hecke relations are $(N_s-v_s)(N_s+v_s^{-1})=0$ for $s\in S_0$ and equality of the alternating products of $N_s,N_t$ of length $m(s,t)$ for distinct $s,t\in S_0$ ([[def-hh-universal-coxeter-hecke-parameters-and-presentation]]):

$$
\theta_yN_{s_\alpha}-N_{s_\alpha}\theta_{s_\alpha(y)}=\begin{cases}(v_\alpha-v_\alpha^{-1})\dfrac{\theta_y-\theta_{s_\alpha(y)}}{1-\theta_{-\alpha^\vee}},&\alpha\notin2X,\\[1ex]\bigl((v_\alpha-v_\alpha^{-1})+\theta_{-\alpha^\vee}(v'_\alpha-(v'_\alpha)^{-1})\bigr)\dfrac{\theta_y-\theta_{s_\alpha(y)}}{1-\theta_{-2\alpha^\vee}},&\alpha\in2X.\end{cases}
$$

The quotients are interpreted in $\mathbb C[Y]$; their well-definedness is proved in [[lem-hh-affine-hecke-bernstein-quotients-are-well-defined]]. The quotient construction defines an associative algebra. It does **not** assert that $\mathcal B(R,v,v')$ is nonzero, has a PBW basis, or is isomorphic to the Iwahori–Matsumoto algebra of [[def-hh-affine-hecke-algebra-from-root-datum]].

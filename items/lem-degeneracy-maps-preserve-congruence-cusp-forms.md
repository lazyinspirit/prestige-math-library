---
id: lem-degeneracy-maps-preserve-congruence-cusp-forms
kind: lemma
title: "Degeneracy Maps Preserve Congruence-Level Cusp Forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-congruence-modular-form-with-nebentypus
  - thm-bezout-identity
  - thm-laurent-expansion-annulus
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Peter Bruin and Sander Dahmen, Modular Forms, full lecture notes"
      url: "https://websites.math.leidenuniv.nl/algebra/modularforms.pdf"
      locator: "§5.3, printed pp. 77–80: the maps f(z) to f(ez) from level M to level N and their restriction to cusp spaces."
    - title: "Robert Kurinczuk, Modular Forms, full lecture notes"
      url: "https://www.ma.imperial.ac.uk/~dhelm/M4P58/ModularForms2.pdf"
      locator: "Chapter 3 §3.4, printed pp. 64–65: the level-raising map f(z) to f(pz) and the oldspace it generates."
---

## Statement

Let $M,N,d$ be positive integers with $M\mid N$ and $d\mid N/M$. Let $k\ge0$ be an integer, and let $\chi$ and $\chi_M$ be Dirichlet characters modulo $N$ and $M$, respectively, satisfying $\chi(-1)=\chi_M(-1)=(-1)^k$ and $\chi=\chi_M\circ\operatorname{red}$ on units, where $\operatorname{red}:(\mathbb Z/N\mathbb Z)^\times\to(\mathbb Z/M\mathbb Z)^\times$ is reduction. Then for every $g\in S_k(\Gamma_0(M),\chi_M)$, the function $V_dg(z):=g(dz)$ belongs to $S_k(\Gamma_0(N),\chi)$.

## Statement references

[Peter Bruin and Sander Dahmen, Modular Forms, full lecture notes, §5.3](https://websites.math.leidenuniv.nl/algebra/modularforms.pdf)

[Robert Kurinczuk, Modular Forms, full lecture notes, Chapter 3 §3.4](https://www.ma.imperial.ac.uk/~dhelm/M4P58/ModularForms2.pdf)

## Facts & Assumptions

**Given:** The divisibility conditions, compatible characters, and a cusp form $g$ at level $M$.

[F1] [[def-congruence-modular-form-with-nebentypus]]: for $\gamma=\begin{pmatrix}a&b\\c&e\end{pmatrix}\in\Gamma_0(M)$, the weight-$k$ slash action is $(g|_k\gamma)(z)=(cz+e)^{-k}g(\gamma z)=\chi_M(e)g(z)$; at every rational cusp the transformed function has a Fourier expansion with cusp width and zero constant coefficient.

[F2] [[thm-bezout-identity]]: relatively prime integers $r,s$ can be completed to a matrix in $\mathrm{SL}_2(\mathbb Z)$, so each rational cusp is $\tau\infty$ for some $\tau\in\mathrm{SL}_2(\mathbb Z)$.

[F3] [[thm-laurent-expansion-annulus]]: a holomorphic function on a punctured disk has a Laurent expansion converging locally uniformly there, with coefficients given by contour integrals.

## Proof

1.1 Fix $\gamma=\begin{pmatrix}a&b\\c&e\end{pmatrix}\in\Gamma_0(N)$. The integer matrix $\delta=\begin{pmatrix}a&db\\c/d&e\end{pmatrix}$ has determinant $ae-bc=1$, and $c/d$ is divisible by $M$ because $N/(dM)$ is an integer. Hence $\delta\in\Gamma_0(M)$ and $\delta(dz)=d\gamma z$. If a prime dividing $N$ also divided $e$, the determinant equation would give $1=ae-bc\equiv0$ modulo that prime, a contradiction; thus $e$ is a unit modulo $N$. Since $\chi$ is induced from $\chi_M$, [F1] gives $((V_dg)|_k\gamma)(z)=(cz+e)^{-k}g(d\gamma z)=\chi_M(e)g(dz)=\chi(e)(V_dg)(z)$. The function $V_dg$ is holomorphic on $\mathbb H$ because $z\mapsto dz$ maps $\mathbb H$ into itself. [F1, given, algebra]

1.2 Fix a cusp representative $\sigma\in\mathrm{SL}_2(\mathbb Z)$ for level $N$. The rational matrix $A=\begin{pmatrix}d&0\\0&1\end{pmatrix}\sigma$ sends $\infty$ to a rational cusp; by [F2] choose $\tau\in\mathrm{SL}_2(\mathbb Z)$ with $\tau\infty=A\infty$. Then $B=\tau^{-1}A=\begin{pmatrix}\alpha&\beta\\0&\delta\end{pmatrix}$ has rational entries and positive determinant, and its sign may be chosen so $\alpha,\delta>0$. Directly from the slash-action formula, $((V_dg)|_k\sigma)(z)=\delta^{-k}(g|_k\tau)\!\left(\frac{\alpha z+\beta}{\delta}\right)$. The cusp expansion of $g|_k\tau$ has only positive exponents by [F1]; substituting $(\alpha z+\beta)/\delta$ therefore makes this expression decay exponentially as $\operatorname{Im}z\to\infty$. [F1, F2, algebra]

2.1 By step 1.1, $V_dg$ has the level-$N$ automorphy law, so its transform by $\sigma$ is periodic with the corresponding cusp period $P>0$. The function $H(q):=((V_dg)|_k\sigma)(z)$ for $q=e^{2\pi iz/P}$ is well-defined and holomorphic on a punctured disk. Step 1.2 gives $|H(q)|\le C|q|^\epsilon$ for some $C,\epsilon>0$ near $q=0$. By [F3], write its Laurent expansion $H(q)=\sum_{n\in\mathbb Z}c_nq^n$. For each $n\le0$, the contour formula gives $|c_n|\le C r^{\epsilon-n}$ on $|q|=r$, which tends to zero as $r\to0$; hence $c_n=0$. Thus this cusp expansion is holomorphic and has zero constant coefficient. Since $\sigma$ was arbitrary, $V_dg$ is cuspidal at every level-$N$ cusp. [F1, F3, step 1.1, step 1.2, algebra] ∎

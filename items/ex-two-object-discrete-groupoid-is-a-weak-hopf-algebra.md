---
id: ex-two-object-discrete-groupoid-is-a-weak-hopf-algebra
kind: example
title: "The algebra of a two-object discrete groupoid is weak Hopf"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-weak-bialgebra-and-weak-hopf-algebra, def-left-and-right-modules, def-module-homomorphism-kernel-image-and-cokernel, def-hh-bialgebra-and-bialgebra-map]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "Section 7.23, printed pp. 186–189: weak Hopf counital bases and the module tensor product."
    - title: "P. Schauenburg, Weak Hopf Algebras and Quantum Groupoids"
      url: "https://www.impan.pl/shop/publication/transaction/download/product/86703"
      locator: "Sections 4–5, printed pp. 177–180: source/target bases and the image/relative-tensor comparison."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $H=\mathbb C e_0\oplus\mathbb C e_1$ with $e_i e_j=\delta_{ij}e_i$, unit $1=e_0+e_1$, coproduct $\Delta(e_i)=e_i\otimes e_i$, counit $\varepsilon(e_i)=1$, and antipode $S(e_i)=e_i$. Then $H$ is a weak Hopf algebra with $H_t=H_s=H$ and
$$\Delta(1)=e_0\otimes e_0+e_1\otimes e_1\ne1\otimes1.$$
For any left $H$-modules $V,W$, give $V$ the right $H_t$-action $v\triangleleft x=\varepsilon_s'(x)v$ and let $H_t$ act on $W$ by restriction. Here $V\otimes_{H_t}W$ is the quotient of $V\otimes_kW$ by the span of $(v\triangleleft x)\otimes w-v\otimes xw$. The induced diagonal action is $e_i\cdot[v\otimes w]=[e_iv\otimes e_iw]$, and this relative tensor product is naturally isomorphic as a left $H$-module to
$$e_0V\otimes e_0W\ \oplus\ e_1V\otimes e_1W=\Delta(1)(V\otimes W).$$
The counit is not multiplicative, so this weak Hopf algebra is not an ordinary bialgebra.

## Diagram

The underlying discrete groupoid has two objects and only their identity arrows; no arrow connects the two objects.

```tikz
\begin{tikzpicture}
\node (x) at (0,0) {$0$};
\node (y) at (3,0) {$1$};
\draw[->] (x) edge[loop above] node {$\mathrm{id}_0$} (x);
\draw[->] (y) edge[loop above] node {$\mathrm{id}_1$} (y);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The algebra $H=\mathbb C e_0\oplus\mathbb C e_1$, the structure maps in the Statement, and unital left $H$-modules $V,W$.

[F1] [[def-weak-bialgebra-and-weak-hopf-algebra]]: the weak unit, weak counit, and weak antipode identities, and the formulas for $\varepsilon_t$, $\varepsilon_s$, and $\varepsilon_s'$.

[F2] [[def-left-and-right-modules]]: a left module action is unital and associative.

[F3] [[def-module-homomorphism-kernel-image-and-cokernel]]: an $H$-linear map preserves addition and the left $H$-action.

[F4] [[def-hh-bialgebra-and-bialgebra-map]]: an ordinary bialgebra has multiplicative counit $\varepsilon$.

## Verification

1.1 Multiplication is associative and unital. The coproduct is coassociative, and $(\varepsilon\otimes\mathrm{id})\Delta(e_i)=e_i=(\mathrm{id}\otimes\varepsilon)\Delta(e_i)$. Also $\Delta(e_i)\Delta(e_j)=\delta_{ij}e_i\otimes e_i=\Delta(e_ie_j)$, so $\Delta$ is multiplicative. [given, F1, algebra]

2.1 Put $E=\Delta(1)=\sum_i e_i\otimes e_i$. Both iterated coproducts of $E$ equal $\sum_i e_i\otimes e_i\otimes e_i$, and $(E\otimes1)(1\otimes E)=(1\otimes E)(E\otimes1)=\sum_i e_i\otimes e_i\otimes e_i$ by orthogonality. For basis triples $e_i,e_j,e_k$, each weak-counit product equals $1$ exactly when $i=j=k$ and is $0$ otherwise; trilinearity proves both weak-counit identities. The counital-map formulas give $\varepsilon_t(e_i)=e_i=\varepsilon_s(e_i)$. Finally, $S(e_i)=e_i$ gives $e_iS(e_i)=\varepsilon_t(e_i)$, $S(e_i)e_i=\varepsilon_s(e_i)$, and $S(e_i)e_iS(e_i)=S(e_i)$. Thus all weak Hopf axioms hold by linearity. [given, F1, step 1.1, algebra]

3.1 The counital formulas also give $\varepsilon_s'(e_i)=\sum_j e_j\varepsilon(e_je_i)=e_i$, hence $H_t=H_s=H$. Since $E$ has no off-diagonal terms whereas $1\otimes1$ has them, $\Delta(1)\ne1\otimes1$. Moreover $\varepsilon(e_0e_1)=0$ but $\varepsilon(e_0)\varepsilon(e_1)=1$, so the structure is not an ordinary bialgebra. [F1, F4, step 2.1, algebra]

4.1 Orthogonal idempotents summing to $1$ give direct sums $V=e_0V\oplus e_1V$ and $W=e_0W\oplus e_1W$ by the left module axioms. On each elementary summand $e_iV\otimes e_jW$, $E$ acts as multiplication by $\delta_{ij}$, so its image is $(e_0V\otimes e_0W)\oplus(e_1V\otimes e_1W)$. Also $v\triangleleft e_i=e_iv$. The balancing relation for $x=e_i$ kills $e_iV\otimes e_jW$ when $i\ne j$, while for $i=j$ the left and right actions agree. For $v_i=e_iv$ and $w_j=e_jw$, the relation for $x=a_0e_0+a_1e_1$ is $(a_i-a_j)v_i\otimes w_j$. It vanishes when $i=j$; when $i\ne j$, choosing $x=e_i$ generates the whole summand $e_iV\otimes e_jW$. Thus the relation subspace is exactly the sum of the two off-diagonal summands. [F1, F2, step 3.1, algebra]

5.1 The quotient and image are both the direct sum of the diagonal summands by step 4.1, and the quotient map and its inverse are the identity on each such summand. On each diagonal summand $e_jV\otimes e_jW$, both the image and quotient actions of $e_i$ are multiplication by $\delta_{ij}$; hence the isomorphism is $H$-linear. If $f:V\to V'$ and $g:W\to W'$ are $H$-linear, then [F3] gives $f(e_i v)=e_i f(v)$ and $g(e_i w)=e_i g(w)$, so $f\otimes g$ preserves each diagonal summand and the isomorphism is natural in $V,W$. [F1, F3, step 4.1, algebra] ∎

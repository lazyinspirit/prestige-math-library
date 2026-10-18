---
id: lem-weak-bialgebra-source-and-target-bases
kind: lemma
title: "Counital bases of a weak bialgebra"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-weak-bialgebra-and-weak-hopf-algebra]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "Definition 7.23.1 and Exercises 7.23.3–7.23.5, printed pp. 186–189."
    - title: "P. Schauenburg, Weak Hopf Algebras and Quantum Groupoids"
      url: "https://www.impan.pl/shop/publication/transaction/download/product/86703"
      locator: "Section 4, printed pp. 176–178, equations (4.5)–(4.11) and Proposition 4.2: exact primed counital-map order, source/target coproduct formulas, and the target-base Frobenius system. The two module-unit identities are derived locally."
verification:
  precheck: pass
---

## Statement

Let $H$ be a weak bialgebra over a field $k$, with counital maps $\varepsilon_t,\varepsilon_s$ and images $H_t,H_s$ as in [[def-weak-bialgebra-and-weak-hopf-algebra]]. Then $\varepsilon_t$ and $\varepsilon_s$ are idempotent projections, $H_t$ and $H_s$ are unital subalgebras that commute elementwise, and $\varepsilon_t|_{H_s}:H_s\to H_t$ is an algebra anti-isomorphism whose inverse is $\varepsilon_s'|_{H_t}$. For $g,h\in H$ and $x,z\in H_t$,
$$\varepsilon_t(gh)=\varepsilon_t(g\varepsilon_t(h)),\qquad \varepsilon_t(xh)=x\varepsilon_t(h),\qquad \varepsilon_t(\varepsilon_s'(x)z)=zx.$$
The element
$$e=(\varepsilon_t\otimes\mathrm{id})\Delta(1)=\sum e^1\otimes e^2\in H_t\otimes H_t$$
is a separability idempotent for $H_t$, meaning that its product is $1$ and it centralizes $H_t$; for every $x\in H_t$ it also satisfies
$$\sum\varepsilon(xe^1)e^2=x,\qquad \sum e^1\varepsilon(e^2x)=x,\qquad \sum e^1e^2=1,\qquad \sum xe^1\otimes e^2=\sum e^1\otimes e^2x.$$
Moreover, $\Delta(1)=\sum\varepsilon_s'(e^1)\otimes e^2$. For $h\in H$ and $x\in H_t$ the identities
$$\sum\varepsilon_t(h_{(1)}x)h_{(2)}=hx,\qquad \sum\varepsilon_s'(\varepsilon_t(h_{(2)}x))h_{(1)}=h\varepsilon_s'(x)$$
hold. These are the counital-base identities used for the relative tensor product and its unit maps.

## Facts & Assumptions

**Given:** A weak bialgebra $H$ over $k$, the algebraic tensor convention, and $\Delta(1)=\sum1_{(1)}\otimes1_{(2)}$.

[F1] [[def-weak-bialgebra-and-weak-hopf-algebra]]: $\Delta$ is multiplicative; the weak unit and weak counit identities hold; $\varepsilon_t(h)=\sum\varepsilon(1_{(1)}h)1_{(2)}$, $\varepsilon_s(h)=\sum1_{(1)}\varepsilon(h1_{(2)})$, and $\varepsilon_s'(h)=\sum1_{(1)}\varepsilon(1_{(2)}h)$.

## Proof

**Proof technique:** direct.

1.1 Taking the middle argument to be $1$ in the weak counit identity gives $\varepsilon(gh)=\sum\varepsilon(g1_{(2)})\varepsilon(1_{(1)}h)=\varepsilon(g\varepsilon_t(h))$. Substitution into the definition of $\varepsilon_t$ yields $\varepsilon_t(gh)=\varepsilon_t(g\varepsilon_t(h))$. Coalgebra counitality gives $\varepsilon_t(1)=1$; setting $g=1$ in the displayed identity gives $\varepsilon_t^2=\varepsilon_t$. The corresponding identities for $\varepsilon_s$ follow by reversing the tensor factors. [F1, algebra]

2.1 Let $\Delta(1)=1_{(1)}\otimes1_{(2)}=1'_{(1)}\otimes1'_{(2)}$ denote two copies. The weak-unit identity and multiplicativity give $\Delta(\varepsilon_t(h))=\varepsilon(1_{(1)}h)\Delta(1_{(2)})=\varepsilon(1_{(1)}h)1_{(2)}\otimes1_{(3)}=\varepsilon_t(h)1_{(1)}\otimes1_{(2)}=1_{(1)}\varepsilon_t(h)\otimes1_{(2)}$. Reversing the tensor factors gives $\Delta(\varepsilon_s(h))=1_{(1)}\otimes\varepsilon_s(h)1_{(2)}=1_{(1)}\otimes1_{(2)}\varepsilon_s(h)$. The weak-unit and weak-counit equations also give $\varepsilon_t(1_{(1)}h)1_{(2)}=\varepsilon(1'_{(1)}1_{(1)}h)1'_{(2)}1_{(2)}=\varepsilon_t(h)$ and $1_{(1)}\otimes\varepsilon_t(1_{(2)})=1_{(1)}\otimes\varepsilon(1'_{(1)}1_{(2)})1'_{(2)}=1_{(1)}\otimes\varepsilon(1_{(2)})1_{(3)}=1_{(1)}\otimes1_{(2)}$. Hence $\Delta(1)=\varepsilon_s(1_{(1)})\otimes\varepsilon_t(1_{(2)})\in H_s\otimes H_t$. The same formulas with the primed counital maps show that they restrict to the identity on their respective images. Thus $\Delta(x)=x1_{(1)}\otimes1_{(2)}=1_{(1)}x\otimes1_{(2)}$ for $x\in H_t$, and the factor-reversed formulas hold for $x\in H_s$. Finally, the counital identity $x\varepsilon_t(h)=\varepsilon_t(xh)$ for $x\in H_t$ gives $xy=\varepsilon_t(xb)\in H_t$ when $x=\varepsilon_t(a)$ and $y=\varepsilon_t(b)$; also $1=\varepsilon_t(1)$. The factor-reversed calculation proves that $H_s$ is a unital subalgebra. [F1, step 1.1, algebra]

3.1 Expanding the counital maps and using the two equal weak-unit products gives $\varepsilon_t(g)\varepsilon_s(h)=\varepsilon(1_{(1)}g)1_{(2)}1'_{(1)}\varepsilon(h1'_{(2)})=\varepsilon(1_{(1)}g)1'_{(1)}1_{(2)}\varepsilon(h1'_{(2)})=\varepsilon_s(h)\varepsilon_t(g)$, so the two images commute. For $y\in H_s$, $h\in H$, and $x\in H_t$, the product formula in step 1.1 and the identity $x\varepsilon_t(h)=\varepsilon_t(xh)$ from step 2.1 give $\varepsilon_t(yh)=\varepsilon_t(y\varepsilon_t(h))=\varepsilon_t(\varepsilon_t(h)y)=\varepsilon_t(h)\varepsilon_t(y)$; hence $\varepsilon_t|_{H_s}$ reverses products. Direct substitution into the definitions gives $\varepsilon_t\varepsilon_s'(h)=\varepsilon(1_{(1)}1'_{(1)}\varepsilon(1'_{(2)}h))1_{(2)}=\varepsilon(1_{(1)}h)1_{(2)}=\varepsilon_t(h)$ by the weak-counit identity. Applying the same calculation with multiplication and coproduct reversed gives $\varepsilon_s'\varepsilon_t(h)=\varepsilon_s'(h)$. Since both counital maps are the identity on their images, these equalities make $\varepsilon_t|_{H_s}$ and $\varepsilon_s'|_{H_t}$ mutually inverse. Thus $\varepsilon_s'(x)\in H_s$; it commutes with $z\in H_t$, and $\varepsilon_t(\varepsilon_s'(x)z)=\varepsilon_t(z\varepsilon_s'(x))=z\varepsilon_t(\varepsilon_s'(x))=zx$. [F1, step 1.1, step 2.1, algebra]

3.2 Put $E=\Delta(1)$. For every $y\in H$, multiplicativity gives $E\Delta(y)=\Delta(y)$; hence $\sum\varepsilon_t(y_{(1)})y_{(2)}=\sum\varepsilon(1_{(1)}y_{(1)})1_{(2)}y_{(2)}=(\varepsilon\otimes\mathrm{id})(E\Delta(y))=y$ by coalgebra counitality. For $x\in H_t$, step 2.1 gives $\Delta(x)=(x\otimes1)E=E(x\otimes1)$, so $\Delta(hx)=\Delta(h)(x\otimes1)E=\Delta(h)E(x\otimes1)=\sum h_{(1)}x\otimes h_{(2)}$. Applying the preceding identity to $y=hx$ proves $\sum\varepsilon_t(h_{(1)}x)h_{(2)}=hx$. [F1, step 2.1, algebra]

4.1 Put $e=(\varepsilon_t\otimes\mathrm{id})\Delta(1)=\sum e^1\otimes e^2$. Step 2.1 puts both tensor legs in $H_t$, and $e^1=\varepsilon(1'_{(1)}1_{(1)})1'_{(2)}$, $e^2=1_{(2)}$. For $x\in H_t$, substituting these expressions and using the weak-unit identity yields $\sum\varepsilon(xe^1)e^2=\varepsilon(1'_{(1)}1_{(1)})\varepsilon(x1'_{(2)})1_{(2)}=\varepsilon(1_{(1)}x)1_{(2)}=x$. The other contraction is $\sum e^1\varepsilon(e^2x)=\varepsilon(1'_{(1)}1_{(1)})1'_{(2)}\varepsilon(1_{(2)}x)=\varepsilon(1'_{(1)}x)1'_{(2)}=\varepsilon_t(x)=x$, again by the weak-unit identity and $x\in H_t$. Taking $x=1$ in the first contraction gives $\sum\varepsilon(e^1)e^2=1$; the weak-unit identity also gives $\sum e^1e^2=\sum\varepsilon_t(1_{(1)})1_{(2)}=1$. The pairing $(y,x)\mapsto\varepsilon(yx)$ on $H_t$ is nondegenerate: if $\varepsilon(yx)=0$ for every $y\in H_t$, then the second contraction gives $x=\sum e^1\varepsilon(e^2x)=0$. For any $x,y\in H_t$, both contractions $(\varepsilon(y\,\cdot)\otimes\mathrm{id})(xe)$ and $(\varepsilon(y\,\cdot)\otimes\mathrm{id})(ex)$ equal $yx$ by the first reconstruction identity; nondegeneracy therefore gives $xe=ex$. Finally, $\Delta(1)\in H_s\otimes H_t$ and $\varepsilon_s'\varepsilon_t|_{H_s}=\mathrm{id}_{H_s}$ imply $\Delta(1)=\sum\varepsilon_s'(e^1)\otimes e^2$. [F1, step 2.1, step 3.1, algebra]

5.1 For $q\in H_s$, step 2.1 gives $\Delta(q)=E(1\otimes q)$, so $\Delta(hq)=\Delta(h)(1\otimes q)$ and coalgebra counitality yields $\sum h_{(1)}\varepsilon(h_{(2)}q)=hq$. The weak counit equation with middle argument $1$ gives $\varepsilon(h_{(2)}x)=\sum\varepsilon(h_{(2)}1_{(1)})\varepsilon(1_{(2)}x)$. Since $E\in H_s\otimes H_t$ by step 2.1, applying the preceding contraction to its first leg shows $\sum h_{(1)}\varepsilon(h_{(2)}x)=\sum h1_{(1)}\varepsilon(1_{(2)}x)=h\varepsilon_s'(x)$. Finally step 3.1 proves $\varepsilon_s'\varepsilon_t=\varepsilon_s'$ on all of $H$, and $E\Delta(h)=\Delta(h)$ gives $\sum\varepsilon_s'(\varepsilon_t(h_{(2)}x))h_{(1)}=\sum\varepsilon_s'(h_{(2)}x)h_{(1)}=\sum1_{(1)}h_{(1)}\varepsilon(1_{(2)}h_{(2)}x)=\sum h_{(1)}\varepsilon(h_{(2)}x)=h\varepsilon_s'(x)$. The order of the factors is essential: the $\varepsilon_s'$ factor precedes $h_{(1)}$, as required for the right unit map of left modules. No antipode, finite-dimensionality assumption, or commutativity of $H_t$ has been used. [F1, step 2.1, step 3.1, step 3.2, algebra] ∎

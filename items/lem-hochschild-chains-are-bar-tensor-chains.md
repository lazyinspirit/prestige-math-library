---
id: lem-hochschild-chains-are-bar-tensor-chains
kind: lemma
title: Hochschild chains are bar tensor chains
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-enveloping-algebra-and-bimodule-module-dictionary, def-two-sided-bar-resolution-of-an-associative-algebra, def-hochschild-chain-complex-of-a-bimodule, thm-universal-property-of-module-tensor-products, cor-finite-iterated-tensor-products-represent-multilinear-maps, thm-unit-isomorphisms-for-module-tensor-products]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9: Hochschild and Cyclic Homology, §9.1.3"
      url: https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, Hochschild homology section"
      url: https://arxiv.org/pdf/math/0510265
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Let $k$ be a field, $A$ a unital associative $k$-algebra, and $M$ a
$k$-central $A$-bimodule. For every $n\geq0$, define
$$\Phi_n:\operatorname{Bar}_n(A)\otimes_{A^e}M\longrightarrow C_n(A,M),\qquad (a_0\otimes\cdots\otimes a_{n+1})\otimes m\longmapsto (a_{n+1}ma_0)\otimes a_1\otimes\cdots\otimes a_n$$.
The family $(\Phi_n)_{n\geq0}$ is an isomorphism of chain complexes, natural in
the $k$-central bimodule $M$, from $\operatorname{Bar}_\bullet(A)\otimes_{A^e}M$
to the Hochschild chain complex $C_\bullet(A,M)$. For $n=0$, the target is
$C_0(A,M)=M$ and the formula is $\Phi_0((a_0\otimes a_1)\otimes m)=a_1ma_0$.
No projectivity assumption on $M$ is needed.

## Facts & Assumptions

**Given:** A field $k$, a unital associative $k$-algebra $A$, and a $k$-central $A$-bimodule $M$.

[F1] The two-sided bar term is $\operatorname{Bar}_n(A)=A\otimes_k A^{\otimes_k n}\otimes_kA$, with differential the alternating sum of adjacent-multiplication faces ([[def-two-sided-bar-resolution-of-an-associative-algebra]]).

[F2] Its right $A^e$-action is $(a_0\otimes\cdots\otimes a_{n+1})\cdot(c\otimes d^{\mathrm{op}})= da_0\otimes a_1\otimes\cdots\otimes a_{n+1}c$ ([[def-two-sided-bar-resolution-of-an-associative-algebra]]).

[F3] The $k$-central bimodule $M$ is a left $A^e$-module by $(c\otimes d^{\mathrm{op}})m=cmd$ ([[def-enveloping-algebra-and-bimodule-module-dictionary]]).

[F4] The Hochschild chain terms are $C_n(A,M)=M\otimes_kA^{\otimes_k n}$ for $n\geq1$, and $C_0(A,M)=M$ ([[def-hochschild-chain-complex-of-a-bimodule]]).

[F5] The Hochschild face maps have first and last module-action faces and internal adjacent-multiplication faces ([[def-hochschild-chain-complex-of-a-bimodule]]).

[F6] A balanced map from a right module and a left module into an abelian group induces a unique homomorphism from their tensor product ([[thm-universal-property-of-module-tensor-products]]).

[F7] A multilinear map on finitely many $k$-module factors induces a unique linear map from their iterated tensor product ([[cor-finite-iterated-tensor-products-represent-multilinear-maps]]).

[F8] The tensor unit maps $k\otimes_kV\to V$ and $V\otimes_kk\to V$ are isomorphisms ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[F9] The Hochschild boundary $b_n$ is the alternating sum of its face maps ([[def-hochschild-chain-complex-of-a-bimodule]]).

[F10] The enveloping algebra is $A^e=A\otimes_k A^{\mathrm{op}}$ ([[def-enveloping-algebra-and-bimodule-module-dictionary]]).

## Proof

**Proof technique:** direct.

1.1 For $n\geq0$, define on pure tensors $$f_n(a_0\otimes\cdots\otimes a_{n+1},m)=(a_{n+1}ma_0)\otimes a_1\otimes\cdots\otimes a_n,$$ where at $n=0$ the value is $a_1ma_0\in M$. The formula is $k$-multilinear in the $n+2$ algebra slots and $m$, so [F7] gives a bilinear map $f_n:\operatorname{Bar}_n(A)\times M\to C_n(A,M)$. It is balanced over $A^e$: for $z=a_0\otimes\cdots\otimes a_{n+1}$, $$f_n(z\cdot(c\otimes d^{\mathrm{op}}),m)=(a_{n+1}c)md a_0\otimes a_1\otimes\cdots\otimes a_n=a_{n+1}(cmd)a_0\otimes a_1\otimes\cdots\otimes a_n=f_n(z,(c\otimes d^{\mathrm{op}})m),$$ using [F2], [F3], and associativity. By [F6] it induces $\Phi_n$ with the stated formula. In degree zero this is precisely $\Phi_0((a_0\otimes a_1)\otimes m)=a_1ma_0$. [F1, F2, F3, F4, F6, F7, given, algebra]

1.2 Define $\Psi_n$ on pure Hochschild tensors by $$\Psi_n(m\otimes a_1\otimes\cdots\otimes a_n)=(1\otimes a_1\otimes\cdots\otimes a_n\otimes1)\otimes_{A^e}m.$$ This prescription is $k$-multilinear and hence defines a linear map by [F7]. At $n=0$, set $\Psi_0(m)=(1\otimes1)\otimes_{A^e}m$, consistent with $C_0(A,M)=M$. [F1, F4, F7, given, algebra]

1.3 For $n\geq1$, the bar face $r=0$ becomes the first Hochschild face, because $a_{n+1}m(a_0a_1)=(a_{n+1}ma_0)a_1$. Each internal face $1\leq r<n$ keeps the coefficient $a_{n+1}ma_0$ and multiplies the same adjacent pair $a_r,a_{r+1}$. The last bar face $r=n$ becomes the cyclic face because $(a_na_{n+1})ma_0=a_n(a_{n+1}ma_0)$. These faces have the same alternating sign $(-1)^r$, so $\Phi_{n-1}(d_n\otimes1_M)=b_n\Phi_n$. When $n=1$, there are no internal faces: applying $\Phi_0$ to $d_1\otimes1_M$ gives $a_2m(a_0a_1)-(a_1a_2)ma_0$, equal to $(a_2ma_0)a_1-a_1(a_2ma_0)=b_1\Phi_1$ by associativity. At $n=0$ both outgoing differentials are zero. [F1, F4, F5, F9, given, algebra]

2.1 On a pure Hochschild tensor, $\Phi_n\Psi_n$ is the identity because the outer units act trivially on $M$. Conversely, for $z=a_0\otimes\cdots\otimes a_{n+1}$, [F2] gives $(1\otimes a_1\otimes\cdots\otimes a_n\otimes1)\cdot (a_{n+1}\otimes a_0^{\mathrm{op}})=z$, and [F3] gives $(a_{n+1}\otimes a_0^{\mathrm{op}})m=a_{n+1}ma_0$. The balancing relation in $\otimes_{A^e}$ therefore gives $\Psi_n\Phi_n(z\otimes m)=z\otimes m$. The same calculation at $n=0$ uses the empty middle tensor. Thus $\Phi_n$ and $\Psi_n$ are inverse in every degree. [step 1.1, step 1.2, F2, F3, F6, given, algebra]

3.1 If $g:M\to N$ is an $A$-bimodule map, then $\Phi_n^N(z\otimes g(m))=a_{n+1}g(m)a_0\otimes a_1\otimes\cdots\otimes a_n =g(a_{n+1}ma_0)\otimes a_1\otimes\cdots\otimes a_n$, so the isomorphisms are natural in the coefficient bimodule. If $A=k$, the multiplication map $k\otimes_k k^{\mathrm{op}}\to k$ has inverse $\lambda\mapsto\lambda\otimes1$, since $c\otimes d=cd\otimes1$ in the tensor product; [F10] identifies $A^e=k\otimes_k k^{\mathrm{op}}$ with $k$. Under this identification, the right action in [F2] on $\operatorname{Bar}_n(k)\cong k$ is scalar multiplication by $cd$, and the left action in [F3] on $M$ is also multiplication by $cd$. Thus $\operatorname{Bar}_n(k)\otimes_{k^e}M\cong k\otimes_kM\cong M$ by [F8]. The Hochschild term $C_n(k,M)\cong M$ by the tensor-unit maps, since the $n$ scalar factors multiply into the coefficient. Every bar and Hochschild face preserves this total scalar, so each face identifies with $\operatorname{id}_M$, and the formula for $\Phi_n$ also identifies with $\operatorname{id}_M$. This checks the degenerate ground-field case directly. The displayed isomorphisms use no projectivity or choice. [step 1.1, step 2.1, step 1.3, F1, F2, F3, F4, F5, F8, F10, given, algebra] $\square$

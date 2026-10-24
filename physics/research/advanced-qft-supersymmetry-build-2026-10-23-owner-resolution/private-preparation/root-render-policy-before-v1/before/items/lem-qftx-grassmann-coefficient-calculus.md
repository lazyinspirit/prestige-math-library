---
id: lem-qftx-grassmann-coefficient-calculus
kind: lemma
title: Associativity and coefficient calculus for the finite superspace Grassmann algebra
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps: [def-qftx-superspace-grassmann-algebra]
dependency_roles:
  def-qftx-superspace-grassmann-algebra: mathematical-premise
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§4.1, printed pp. 31–33; the local proof fixes the complete four-generator basis and ordering."
    - title: "S. J. Gates Jr., M. T. Grisaru, M. Roček and W. Siegel, Superspace, or One Thousand and One Lessons in Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0108200"
      locator: "§3.7, printed pp. 97–99, Berezin coefficient extraction; the local proof verifies the selected left/right convention."
verification:
  precheck: pending
---

## Statement

For the basis-indexed vector space and product $e_Se_T=0$ when $S\cap T\ne\varnothing$ and $e_Se_T=(-1)^{\nu(S,T)}e_{S\cup T}$ otherwise, with $\nu(S,T)=|\{(s,t)\in S\times T:s>t\}|$, multiplication is associative, unital and supercommutative. The graded tensor product with a supercommutative coefficient algebra is also associative and supercommutative. The basis formulas for left and right odd differentiation extend to derivations with the stated Leibniz rules. The ordered four-variable Berezin integral is a well-defined linear functional extracting the coefficient of $\theta^1\theta^2\bar\theta^{\dot1}\bar\theta^{\dot2}$, and the stated conjugation is an involutive anti-automorphism.

## Statement references

[Martin, §4.1](https://arxiv.org/pdf/hep-ph/9709356v7).

[Gates et al., §3.7](https://arxiv.org/pdf/hep-th/0108200).

Four-dimensional N=1 superspace Grassmann algebra and Berezin integration: [[def-qftx-superspace-grassmann-algebra]].

## Facts & Assumptions

**Given:** The finite basis $e_S$, multiplication sign $\nu(S,T)$, coefficient superalgebra, derivative actions and ordered measures in the Statement.

[F1] [[def-qftx-superspace-grassmann-algebra]]: the basis is indexed by all subsets of $\{1,2,3,4\}$, $e_Se_T=0$ on overlap and otherwise equals $(-1)^{\nu(S,T)}e_{S\cup T}$; coefficient multiplication is the graded tensor product, and the left/right derivative actions on homogeneous coefficient-left tensors are $(-1)^{|a|}a\otimes\partial^L e_S$ and $a\otimes\partial^R e_S$, respectively.

[F2] [[def-qftx-superspace-grassmann-algebra]]: for $i\in S$, $\partial^L_{\xi_i}e_S=(-1)^{|\{s\in S:s<i\}|}e_{S\setminus\{i\}}$ and $\partial^R_{\xi_i}e_S=(-1)^{|\{s\in S:s>i\}|}e_{S\setminus\{i\}}$, and both vanish when $i\notin S$.

[F3] [[def-qftx-superspace-grassmann-algebra]]: the one-variable integral extracts the coefficient with that variable ordered first; the four-variable measure is $\int d\bar\theta^{\dot2}d\bar\theta^{\dot1}d\theta^2d\theta^1$.

[F4] [[def-qftx-superspace-grassmann-algebra]]: conjugation reverses product order and exchanges $\theta^\alpha$ with $\bar\theta^{\dot\alpha}$.

## Proof


**Given:** The finite basis and signed product in [F1], and the specified derivative, integral and conjugation operations in [F2]–[F4].

1.1 The element $e_\varnothing$ is a two-sided identity because $\nu(\varnothing,S)=\nu(S,\varnothing)=0$. For $S,T,U\subseteq\{1,2,3,4\}$, if any two sets overlap, both parenthesizations $(e_Se_T)e_U$ and $e_S(e_Te_U)$ vanish: if the first pair overlaps one side vanishes immediately and the other retains that common generator, and the same argument applies to the other pairs. If $S,T,U$ are pairwise disjoint, the left sign exponent is $\nu(S,T)+\nu(S\cup T,U)=\nu(S,T)+\nu(S,U)+\nu(T,U)$, while the right exponent is $\nu(T,U)+\nu(S,T\cup U)=\nu(T,U)+\nu(S,T)+\nu(S,U)$. The signs agree, proving associativity on basis elements and hence by trilinearity on all elements. [F1, algebra]

2.1 If $S\cap T\ne\varnothing$, both products vanish. If the sets are disjoint, every ordered pair in $S\times T$ has exactly one of $s>t$ or $t>s$, so $\nu(S,T)+\nu(T,S)=|S||T|$. Thus $e_Se_T=(-1)^{|S||T|}e_Te_S$. This proves supercommutativity. [F1, step 1.1, algebra]

2.2 Put $a=|\{s\in S:s<i\}|$, $c=|\{s\in S:s>i\}|$, $b=|\{t\in T:t<i\}|$, and $d=|\{t\in T:t>i\}|$. If $S$ and $T$ are disjoint and $i\in S$, then $\nu(S,T)=\nu(S\setminus\{i\},T)+b$; the left-hand derivative exponent is $a+b+\nu(S,T)$, equal modulo two to the right-hand side exponent $a+\nu(S\setminus\{i\},T)$. If $i\in T$, then $\nu(S,T)=\nu(S,T\setminus\{i\})+c$; the left-hand exponent $a+b+\nu(S,T)$ equals the right-hand exponent $|S|+b+\nu(S,T\setminus\{i\})$, since $i\notin S$ and $|S|=a+c$. For the right derivative, if $i\in S$ the identity $\nu(S,T)=\nu(S\setminus\{i\},T)+b$ makes the left exponent $c+d+\nu(S,T)$ equal to the right exponent $|T|+c+\nu(S\setminus\{i\},T)$; if $i\in T$, the identity $\nu(S,T)=\nu(S,T\setminus\{i\})+c$ makes both exponents $d+\nu(S,T\setminus\{i\})$ modulo two. If $S\cap T$ contains a common element other than $i$, all Leibniz terms vanish because an overlap remains. If $S\cap T=\{i\}$, both terms can be nonzero, but their exponents differ by one: for the left rule they are $a+\nu(S\setminus\{i\},T)$ and $|S|+b+\nu(S,T\setminus\{i\})$; for the right rule they are $|T|+c+\nu(S\setminus\{i\},T)$ and $d+\nu(S,T\setminus\{i\})$. Thus they cancel in both rules, matching the derivative of $e_Se_T=0$. For homogeneous coefficient-left tensors $a\otimes e_S$ and $b\otimes e_T$, the left derivative of their product has the common sign $(-1)^{|S||b|+|a|+|b|}$ multiplying the exterior left Leibniz expansion; the first tensor Leibniz term has sign $(-1)^{|a|+(|S|-1)|b|}$, which is equal, and the second has the additional $(-1)^{|S|}$ required by the exterior rule. For the right derivative, the first tensor Leibniz term has sign $(-1)^{|b|+|T|+(|S|-1)|b|}=(-1)^{|S||b|+|T|}$, while the second carries $(-1)^{|S||b|}$; these are exactly the two exterior right-rule terms. Thus the stated coefficient-left derivative extensions satisfy the graded-tensor left and right Leibniz identities. [F1, F2, step 1.1, algebra]

3.1 For homogeneous tensors $a\otimes e_S$, $b\otimes e_T$ and $c\otimes e_U$, the sign in $((a\otimes e_S)(b\otimes e_T))(c\otimes e_U)$ is $|S||b|+(|S|+|T|)|c|$, while the sign in $(a\otimes e_S)((b\otimes e_T)(c\otimes e_U))$ is $|T||c|+|S|(|b|+|c|)$. These exponents agree modulo two; associativity of $\mathcal A$ and step 1.1 then gives associativity of the graded tensor product. Combining its sign $|S||b|$ with supercommutativity of both factors gives the total sign $(-1)^{(|a|+|S|)(|b|+|T|)}$ when the tensors are exchanged, so the tensor product is supercommutative. [F1, step 1.1, step 2.1, algebra]

3.2 The vectors $e_S$ are a specified basis, so each coefficient polynomial has a unique finite expansion. For a fixed $i$, grouping terms with and without $i$ and moving $\xi_i$ to the left by the signed product rule gives a unique expression $f=f_0+\xi_i f_1$ with $f_0,f_1$ independent of $\xi_i$; hence the linear coefficient extraction in [F3] is well-defined. Applying the four ordered coefficient maps successively to $e_S$ returns $1$ exactly when $S=\{1,2,3,4\}$ and $0$ otherwise. By linearity, the full measure extracts precisely the stated top coefficient. [F1, F3, step 1.1, step 2.1]

4.1 Reversing a word in the four generators and exchanging each undotted generator with its dotted conjugate preserves the square-zero and anticommutation relations. The coefficient operation preserves parity and reverses products by [F4]. For homogeneous $a\in\mathcal A$ and $e_S$, moving $e_S^*$ back to the right of $a^*$ contributes $(-1)^{|a||S|}$, so the induced tensor formula is $(a\otimes e_S)^*=(-1)^{|a||S|}a^*\otimes e_S^*$, as stated in [F1]. This formula respects the graded-tensor relation: applying it to $(1\otimes e_S)(a\otimes1)=(-1)^{|a||S|}(a\otimes e_S)$ gives the same identity after reversing the factors. Applying the operation twice restores every coefficient and every generator, so it descends to an involutive anti-automorphism. [F1, F4, step 1.1, step 2.1] ∎

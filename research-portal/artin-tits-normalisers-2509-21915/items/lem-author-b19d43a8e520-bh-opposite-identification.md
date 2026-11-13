---
id: lem-author-b19d43a8e520-bh-opposite-identification
kind: lemma
title: Transfer to the root-action Brink–Howlett groupoid
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-standard-expressions-artin-tits-normalisers
  - rem-opposite-convention-artin-tits-normalisers
  - def-coxeter-data-artin-tits-normalisers
  - math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword
  - math:thm-cg-finite-parabolic-longest-element-and-opposition
dependency_roles:
  def-standard-expressions-artin-tits-normalisers: mathematical-premise
  rem-opposite-convention-artin-tits-normalisers: mathematical-premise
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword: mathematical-premise
  math:thm-cg-finite-parabolic-longest-element-and-opposition: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Matthew Dyer and Harrison Gimenez, Root Systems, Tits Cones and Imaginary
        Cones of Brink-Howlett Groupoids
      url: https://arxiv.org/html/2606.12937v1
      locator: Lemma 1.25, opening formula and (d); section 1.27, generator definition
        and rank-one relation; section 1.4, rank convention.
      statement: For b outside K, with E the finite-type component of K union {b}
        containing b, the generator label is nu(b,K)=w_E w_(E minus b). Its
        inverse is another such generator.
      hypotheses: A Coxeter system of arbitrary rank with its standard based root
        system; a union of full Brink–Howlett components; the indicated
        component E is spherical. Other components need not be finite.
      reading_limits: Read the HTML statements in sections 1.3–1.4, 1.7–1.9 and
        1.24–1.27, including Lemma 1.25(d). Import only the single-root formula
        and inverse relation. No reconstruction of their proofs, PDF inspection,
        whole-paper reading or reading of Brink–Howlett (1999) is claimed in
        this adjudication.
proof_strategy: direct
formulation_deps:
  - def-standard-expressions-artin-tits-normalisers
  - rem-opposite-convention-artin-tits-normalisers
  - def-coxeter-data-artin-tits-normalisers
argument_deps:
  - def-standard-expressions-artin-tits-normalisers
  - rem-opposite-convention-artin-tits-normalisers
  - def-coxeter-data-artin-tits-normalisers
  - math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword
  - math:thm-cg-finite-parabolic-longest-element-and-opposition
dependency_level: 12
---

## Statement

Let $(W,S)$ be a Coxeter system with diagram vertex set $\Gamma_0$, standard simple roots $\alpha_i$, and fixed $J\subseteq\Gamma_0$. An associate of $J$ is a subset $A\subseteq\Gamma_0$ for which $W_A$ is conjugate to $W_J$. Put $\Pi_A=\{\alpha_i:i\in A\}$. Let $\mathcal B$ have exactly these associates as objects and arrows $(B,x,A):A\to B$ when $x\Pi_A=\Pi_B$, with composition $(C,y,B)(B,x,A)=(C,yx,A)$.

An article arrow $x:I\to K$ corresponds to the reversed arrow $(I,x,K)$. Every article elementary label $v_{a,I}$ is a Brink–Howlett generator of this restricted $\mathcal B$, and every Brink–Howlett generator of this restricted groupoid corresponds to an article elementary label. No finite-rank assumption is imposed; the elementary labels require only their defining component $[I,a]$ to be spherical.

## External input

Import the single-root generator formula $\nu(b,K)=w_Ew_{E\setminus\{b\}}$ for spherical $E=[K,b]$, and closure of these generators under inversion, from Dyer–Gimenez, Lemma 1.25 and section 1.27. Apply this input only to the groupoid on the objects specified above. The cited proofs are not reconstructed here.

## Facts & Assumptions

[F1] The elementary labels, their endpoints and the article composition convention are those of [[def-standard-expressions-artin-tits-normalisers]]. The root-action comparison on the same objects is supplied by [[rem-opposite-convention-artin-tits-normalisers]].

[F2] The simple roots are distinct basis vectors and the geometric action uses the standard reflection formulas ([[def-coxeter-data-artin-tits-normalisers]]). For each finite set of simple generators, its restricted Coxeter presentation embeds in $W$ and intrinsic length equals ambient length ([[math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword]], assertion 1).

[F3] A finite Coxeter system has a unique longest element $w_E$, with $w_E^2=1$ and $w_Es_iw_E=s_{\iota_E(i)}$; in its canonical representation $w_E\alpha_i=-\alpha_{\iota_E(i)}$. Each of its standard parabolics also has a unique longest element ([[math:thm-cg-finite-parabolic-longest-element-and-opposition]], parts (1)(iii)–(v) and (2)).

[F4] The independent single-root generator formula and inverse-generator relation are the external inputs recorded above.

## Proof

**Given:** The Coxeter system, fixed subset and restricted groupoid in the Statement, with the supplied mathematical premises and explicitly imported generator facts.

**Goal:** Identify the opposite groupoid and establish both directions of the elementary-generator correspondence.

1.1 The object set is the same as that of $\mathcal{BH}(J)$ in [F1]. Its arrow condition $x\Pi_K=\Pi_I$ is exactly the condition for $(I,x,K)$ in $\mathcal B$. For article arrows $x:I\to K$ and $y:K\to L$, the corresponding composite in $\mathcal B$ is $(I,x,K)(K,y,L)=(I,xy,L)$. Thus reversal preserves the label of the article composite, as asserted. [F1, given]

1.2 Let $E$ be any component for which $W_E$ is finite. Distinct indices give distinct simple generators: the generator $s_i$ sends $\alpha_i$ to $-\alpha_i$, while for $j\ne i$ the $\alpha_i$ coefficient of $s_j\alpha_i=\alpha_i-2B(\alpha_i,\alpha_j)\alpha_j$ is $1$. Hence $E$ is finite. By [F2], the restricted system on $E$ identifies with $W_E$, with lengths preserved. The ambient reflection formulas restrict on the span of its simple roots to its canonical representation. Applying [F3] to this finite system therefore gives $w_E^2=1$ and $w_Es_iw_E=s_{\iota_E(i)}$ with the same opposition permutation used for the article label. Applying the root formula twice gives $\alpha_i=\alpha_{\iota_E^2(i)}$; the distinct basis vectors imply $\iota_E^2=1$. [F2, F3, given]

2.1 For $a\in E$ put $b=\iota_E(a)$, so $\iota_E(b)=a$. Conjugation by $w_E$ permutes the simple generators of $W_E$ and sends the generators indexed by $E\setminus\{b\}$ bijectively to those indexed by $E\setminus\{a\}$. It preserves length: replacing each letter in a shortest word gives one inequality, and the inverse conjugation gives the reverse inequality. Thus it carries the maximum-length element of $W_{E\setminus\{b\}}$ to the maximum-length element of $W_{E\setminus\{a\}}$. Uniqueness in [F3] gives $w_Ew_{E\setminus\{b\}}w_E=w_{E\setminus\{a\}}$. [F3, step 1.2]

3.1 For an article elementary arrow put $E=[I,a]$, $b=\iota_E(a)$ and $K=(I\cup\{a\})\setminus\{b\}$. Its label is $v_{a,I}=w_{E\setminus\{a\}}w_E$. Step 2.1 and $w_E^2=1$ give $v_{a,I}=w_Ew_{E\setminus\{b\}}=\nu(b,K)$ by the imported single-root formula. Indeed $K\cup\{b\}=I\cup\{a\}$, so the component containing $b$ is precisely $E$. By step 1.1 this generator has source $K$ and target $I$ in $\mathcal B$. Both are associates of $J$ by [F1], so it belongs to the restricted groupoid. Only $W_E$ must be finite. [F1, F4, step 1.1, step 1.2, step 2.1]

4.1 Conversely, let $g=\nu(b,K)=w_Ew_{E\setminus\{b\}}$ label a Brink–Howlett generator of the restricted groupoid, where $E=[K,b]$ is spherical. The cited inverse-generator relation says that its inverse is again a Brink–Howlett generator. Set $a=\iota_E(b)$ and $I=(K\cup\{b\})\setminus\{a\}$. By the finite-parabolic involutions in [F3], $g^{-1}=w_{E\setminus\{b\}}w_E=v_{b,K}$. By [F1] this is the article elementary arrow $K\to I$, so $I$ is an associate and $g\Pi_K=\Pi_I$. Since $I\cup\{a\}=K\cup\{b\}$, one has $[I,a]=E$; step 1.2 gives $\iota_E(a)=b$. Step 2.1 now yields $v_{a,I}=w_{E\setminus\{a\}}w_E=w_Ew_{E\setminus\{b\}}=g$. Thus $g$ is exactly the reversal of the article elementary arrow $I\to K$, proving the converse without any finiteness condition on the other components. [F1, F3, F4, step 1.1, step 1.2, step 2.1] ∎

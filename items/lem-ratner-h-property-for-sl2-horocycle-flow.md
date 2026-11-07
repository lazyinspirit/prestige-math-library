---
id: lem-ratner-h-property-for-sl2-horocycle-flow
kind: lemma
title: "Ratner H-property for the SL₂ horocycle flow"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-lindenstrauss-t-space]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Marina Ratner, Factors of Horocycle Flows"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/69A3FBAE60E0C939EE0B61AE5800CEDC/S0143385700001723a.pdf"
      locator: "§2, Lemma 2.1, printed pp. 472–473: quantitative divergence of nearby horocycle trajectories."
    - title: "Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity"
      url: "https://math.huji.ac.il/~elon/Publications/quantum.pdf"
      locator: "§7, Lemma 7.5 and preceding matrix calculation (Lemma 7.4), Annals printed pp. 197–198 (local PDF pp. 33–34): compact-set product-leaf H-property."
---

## Statement

Put $H=\mathrm{SL}_2(\mathbb R)$, with a fixed proper left-invariant Riemannian metric. Let $L$ be a locally compact group, $K\le L$ compact, and $T=L/K$ carry a proper $L$-invariant metric. Give $H\times T$ the product metric. Let $\Gamma\le H\times L$ be discrete, with $\Gamma\cap(\{1\}\times L)=\{1\}$, and let $X=\Gamma\backslash(H\times T)$ have the quotient metric and its homogeneous product-leaf charts. Write $n^+(s)=\left(\begin{smallmatrix}1&s\\0&1\end{smallmatrix}\right)$. For each compact $X_0\subset X$ and $0<\rho<1$, there are $C>0$ and $\eta_0>0$ such that if $0<\epsilon<\eta_0$ and $x,x'\in X_0$ satisfy $d(x,x')<\epsilon$ and $x'\notin B_X^{N^+\times T}(x,1)$, then there is $A>0$ such that for every $\rho A<|\tau|<A$ there is $\tau_0\in\mathbb R$ with
\[
C^{-1}<|\tau-\tau_0|<C,\qquad d(x'n^+(\tau),xn^+(\tau_0))<C\sqrt\epsilon.
\]
Here the leaf ball is the image of $\{(s,t):s^2+d_T(t,K)^2<1\}$ in the leaf through $x$.

## Statement references

[Marina Ratner, Factors of Horocycle Flows, §2, Lemma 2.1, printed pp. 472–473: quantitative divergence of nearby horocycle trajectories.](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/69A3FBAE60E0C939EE0B61AE5800CEDC/S0143385700001723a.pdf)

[Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity, §7, Lemma 7.5 and preceding matrix calculation (Lemma 7.4), Annals printed pp. 197–198 (local PDF pp. 33–34): compact-set product-leaf H-property.](https://math.huji.ac.il/~elon/Publications/quantum.pdf)
## Facts & Assumptions

**Given:** The complete homogeneous-space, metric and compactness hypotheses in the Statement. These are essential: the assertion does not hold on an arbitrary space foliated by $N^+\times T$.

[F1] [[def-lindenstrauss-t-space]]: product-leaf charts and their images. All matrix identities and estimates below are proved directly.

## Proof

**Proof technique:** direct.

1.1 The discrete action on $H\times T$ is locally a metric covering. To see the needed uniform local form, first note that an element stabilizing $(h,lK)$ must have trivial $H$ component and hence is the identity by the intersection hypothesis. For a fixed point, a compact small neighborhood has only finitely many translates meeting it: such an intersection bounds the $H$ component in a compact set, and bounds the $L$ component in a compact set because $K$ is compact and the quotient map $L\to L/K$ is proper. For completeness, a compact subset of $L/K$ is covered by finitely many images of translates of a relatively compact identity neighborhood in $L$ (the quotient map is open); its entire inverse image is contained in the corresponding finite union of compact closures multiplied by $K$, and is closed there. A discrete subgroup meets this compact set finitely. Shrinking the neighborhood separates those finitely many nonidentity translates. A finite cover of the compact set $X_0$ therefore supplies a uniform lifting radius. For sufficiently small $\epsilon$, lift $x,x'$ to $(h,t)$ and $(hg,t')$ so that $d_H(1,g),d_T(t,t')\le c\epsilon$, with a fixed constant $c$. In local matrix coordinates write $g=\left(\begin{smallmatrix}a&b\\c_0&d\end{smallmatrix}\right)$; each entry differs from its identity value by at most $c_1\epsilon$. The local comparison between matrix norm and Riemannian distance follows from upper and lower bounds on the continuous positive definite metric tensor on a compact coordinate neighborhood. [given, F1, algebra, construct]

1.2 Put $\ell=d-a$. If $c_0=\ell=0$, then $a=d$ and $a^2=1$; closeness to the identity implies $a=d=1$. Thus $g=n^+(b)$, and the lifted product-leaf displacement has length $O(\epsilon)<1$, contrary to the hypothesis. Hence $c_0$ and $\ell$ are not both zero. Whenever $c_0\tau+d\ne0$, direct multiplication gives
\[
gn^+(\tau)=n^+(\tau_0)r_\tau,\quad \tau_0=\frac{a\tau+b}{c_0\tau+d},\quad r_\tau=\begin{pmatrix}(c_0\tau+d)^{-1}&0\\c_0&c_0\tau+d\end{pmatrix},\quad \tau-\tau_0=\frac{c_0\tau^2+\ell\tau-b}{c_0\tau+d}.
\]
[step 1.1, algebra]

1.3 If $|\ell|>\sqrt{|c_0|}$, set $A=(2|\ell|)^{-1}$. For $\rho A<|\tau|<A$, $|\ell\tau|\in(\rho/2,1/2)$ and $|c_0\tau^2|\le|\ell\tau|/2$. Choose $\epsilon$ so small that $|b|<\rho/8$. The numerator in the last expression of step 1.2 then has magnitude between $\rho/8$ and $1$. Moreover $|c_0\tau|\le\sqrt{|c_0|}/2=O(\sqrt\epsilon)$. The denominator is therefore $1+O(\sqrt\epsilon)$, bounded away from zero, the shift has uniform positive lower and upper bounds depending on $\rho$, and $r_\tau-I=O(\sqrt\epsilon)$. [step 1.2, algebra]

1.4 Otherwise $c_0\ne0$ and $|\ell|\le\sqrt{|c_0|}$. Set $A=2/(\rho\sqrt{|c_0|})$. On the required annulus, $|\tau|>2/\sqrt{|c_0|}$, so $|\ell\tau|\le|c_0\tau^2|/2$ and $|c_0\tau^2|>4$. For $|b|<1$, the numerator has magnitude greater than $1$ and at most $4/\rho^2+2/\rho+1$. Also $|c_0\tau|\le2\sqrt{|c_0|}/\rho=O_\rho(\sqrt\epsilon)$. Again the denominator is uniformly close to one, the shift is bounded above and bounded away from zero, and $r_\tau-I=O_\rho(\sqrt\epsilon)$. These estimates hold for both signs of $\tau$. [step 1.2, algebra]

1.5 Left invariance gives $d_H(hn^+(\tau_0)r_\tau,hn^+(\tau_0))=d_H(r_\tau,1)=O_\rho(\sqrt\epsilon)$; the $T$ coordinates stay at distance $O(\epsilon)$. Passing to the quotient cannot increase distance. Choose $\eta_0$ small enough for all preceding estimates, then choose $C$ strictly larger than their upper bounds and the reciprocals of their positive lower bounds. This proves the strict inequalities in the Statement. [step 1.1, step 1.2, step 1.3, step 1.4, algebra] ∎

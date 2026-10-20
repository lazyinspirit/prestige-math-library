---
id: "lem-lower-semicontinuity-of-path-quadratic-energy"
kind: lemma
title: "Quadratic path energy is lower semicontinuous"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-axiom-of-choice", "thm-choice-implies-dependent-implies-countable-choice", "def-countable-choice", "def-dependent-choice", "thm-c-c-is-dense-in-l-p-for-radon-measures", "def-radon-measure-on-an-lch-space", "thm-riesz-fischer-completeness-of-l-p", "thm-riesz-representation-for-hilbert-space", "thm-first-fundamental-theorem-of-calculus-for-l-one", "thm-cauchy-schwarz-in-an-inner-product-space"]
justified_by: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
proof_strategy: direct
axiom_use: "AC supplies Countable and Dependent Choice for the Radon C_c-density, Hilbert Riesz, and scalar Lebesgue FTC suppliers."
sources:
  references:
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures, Chapter 8, §8.2, PDF pp. 179–182"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §5.3, PDF pp. 176–178"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
---
## Statement

Assume AC. Let $T>0$ and give $C([0,T];\mathbb R^d)$ the uniform topology. Define
$$\mathcal E(\gamma)=\begin{cases}\int_0^T|\dot\gamma(t)|^2dt,&\gamma\text{ is absolutely continuous with }\dot\gamma\in L^2(0,T;\mathbb R^d),\\+\infty,&\text{otherwise.}\end{cases}$$
Then $\mathcal E$ is lower semicontinuous. More precisely,
$$\mathcal E(\gamma)=\sup_{0=t_0<\cdots<t_N=T}\sum_{i=0}^{N-1}\frac{|\gamma(t_{i+1})-\gamma(t_i)|^2}{t_{i+1}-t_i},$$
where the supremum is over all finite partitions of $[0,T]$.

## Statement references

[[def-axiom-of-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]

[[def-countable-choice]]

[[def-dependent-choice]]

[[thm-c-c-is-dense-in-l-p-for-radon-measures]]

[[def-radon-measure-on-an-lch-space]]

[[thm-riesz-fischer-completeness-of-l-p]]

[[thm-riesz-representation-for-hilbert-space]]

[[thm-first-fundamental-theorem-of-calculus-for-l-one]]

[[thm-minkowski-integral-inequality]]

[Ambrosio, Gigli, and Savaré, *Gradient Flows*, Chapter 8, §8.2](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Santambrogio, *Optimal Transport for Applied Mathematicians*, Chapter 5, §5.3](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)

## Facts & Assumptions

**Given:** AC, $T>0$, and a continuous path $\gamma:[0,T]\to\mathbb R^d$.

[F1] Under DC, continuous compactly supported functions are dense in $L^2(0,T)$ for Lebesgue measure; uniform continuity approximates each continuous function uniformly by interval-step functions. [[thm-c-c-is-dense-in-l-p-for-radon-measures]] [[def-radon-measure-on-an-lch-space]] [[def-dependent-choice]]

[F2] The real Hilbert space $L^2(0,T;\mathbb R^d)$ is complete and bounded linear functionals on it have unique Riesz representatives under Countable Choice. [[thm-riesz-fischer-completeness-of-l-p]] [[thm-riesz-representation-for-hilbert-space]] [[def-countable-choice]]

[F3] AC supplies Countable and Dependent Choice for [F1]–[F2] and the scalar Lebesgue FTC. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]] [[def-dependent-choice]] [[thm-first-fundamental-theorem-of-calculus-for-l-one]]

[F4] Cauchy--Schwarz holds for finite sums. [[thm-cauchy-schwarz-in-an-inner-product-space]]

## Proof
1.1 For a partition $P=(t_i)_{i=0}^N$, write $Q_P(\gamma)=\sum_i|\gamma(t_{i+1})-\gamma(t_i)|^2/(t_{i+1}-t_i)$ and set $C=\sup_PQ_P(\gamma)$. If $\gamma$ is absolutely continuous with square-integrable derivative, Cauchy--Schwarz [F4] on each interval gives $Q_P(\gamma)\le\int_0^T|\dot\gamma|^2dt$. [given, F4, algebra]

2.1 Suppose $C<\infty$. On interval-step functions $f(t)=c_i$ for $t_i<t<t_{i+1}$ define $\Lambda(f)=\sum_i c_i\cdot(\gamma(t_{i+1})-\gamma(t_i))$. Refinement leaves this value unchanged, so the functional is well-defined. Cauchy--Schwarz for the finite sums gives $|\Lambda(f)|\le\left(\sum_i|c_i|^2\Delta t_i\right)^{1/2}Q_P(\gamma)^{1/2}\le\sqrt C\|f\|_{L^2}.$ By [F1], interval-step functions are dense in $L^2$, so $\Lambda$ extends uniquely to a bounded linear functional on the real Hilbert space $L^2(0,T;\mathbb R^d)$. [F1, given, step 1.1]

3.1 By [F2]–[F3], Riesz represents $\Lambda$ by some $u\in L^2(0,T;\mathbb R^d)$. Taking the step function equal to a fixed vector c on $(s,t)$ and zero elsewhere gives $c\cdot(\gamma(t)-\gamma(s))=\int_s^t c\cdot u(r)dr$ for every $c$ and every interval. Hence $\gamma(t)-\gamma(s)=\int_s^t u(r)dr$. The scalar FTC [F3] coordinatewise shows that $\gamma$ is absolutely continuous and $\dot\gamma=u$ almost everywhere. Thus $\mathcal E(\gamma)<\infty$. [F2, F3, step 2.1]

4.1 For this absolutely continuous path, the functional $\Lambda$ is integration against $\dot\gamma$ on interval-step functions. Since those functions are dense, its norm is $\|\dot\gamma\|_{L^2}$; for each fixed partition the squared norm of the restriction of $\Lambda$ to step functions constant on its intervals is exactly $Q_P(\gamma)$. Taking the supremum over partitions therefore gives $C=\|\dot\gamma\|_{L^2}^2=\mathcal E(\gamma)$. Conversely, steps 2.1–3.1 prove that finite C forces finite energy, so if $\mathcal E(\gamma)=+\infty$ then C is also infinite. Each $Q_P$ is continuous in the uniform topology because it uses finitely many point evaluations; their supremum is lower semicontinuous. [F1, step 1.1, step 2.1, step 3.1] ∎

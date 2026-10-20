---
id: ex-prompt-and-distribution-sensitive-transfer
kind: example
title: "Prompt and distribution-sensitive transfer"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-zero-shot-prompt-classification
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Alec Radford et al., Learning Transferable Visual Models From Natural Language Supervision"
      url: "https://arxiv.org/pdf/2103.00020"
    - title: "Machine Learning II, Lecture notes — 2021 Clip"
      url: "https://csci4052u.science.ontariotechu.ca/generative_models/2021_clip/notes.html"
---

## Example

Use $\mathbb R^2$ with $e_1=(1,0)$, $e_2=(0,1)$, $\langle(a,b),(c,d)\rangle=ac+bd$, and scale $s>0$. For one image $x$ with normalized image embedding $u=e_1$, consider classes $A,B$ and two prompt templates. Under the first wording, their normalized text embeddings are $v_{A1}=e_1$, $v_{A2}=e_2$, and $v_{B1}=v_{B2}=q_B=(4/5,3/5)$. Embedding-space prompt averaging gives $q_A=(1/\sqrt2,1/\sqrt2)$ and $q_B=(4/5,3/5)$. The class-prototype classifier scores $s/\sqrt2$ for $A$ and $4s/5$ for $B$. Define individual-text retrieval here to rank the four prompt embeddings by their dot product with $u$; it selects the first $A$ prompt, while the class-prototype classifier selects $B$. If a second prompt wording gives both $A$ prompts embedding $e_1$ and leaves the $B$ prompts unchanged, then the classifier selects $A$. These are possible encoder outputs, demonstrating that prompt wording and the candidate construction can change the result.

For a second fixed zero-shot classifier, let the normalized class prototypes be $q_A=e_1$ and $q_B=e_2$, and let two distinct images $x_0\ne x_1$ both have normalized image embedding $e_1$. Give them the fixed true labels $A$ and $B$, respectively, so the classifier predicts $A$ for both. Let $d_A,d_B$ be class-specific descriptions: $d_A$ is true of $A$ and false of $B$, while $d_B$ is true of $B$ and false of $A$; their normalized text embeddings are $q_A,q_B$. The $B$ image $x_1$ paired with the incorrect $A$ description $d_A$ is semantically mismatched but has cosine similarity $1$; paired with its correct $B$ description $d_B$, it has cosine similarity $0$. Thus this construction shows that the embeddings need not preserve semantic compatibility. Define the finite source evaluation law by assigning mass $3/4$ to $(x_0,A)$ and $1/4$ to $(x_1,B)$, and the target evaluation law by assigning mass $1/4$ to $(x_0,A)$ and $3/4$ to $(x_1,B)$. The label assigned to each image is the same under both laws, while the input frequencies differ. Define 0–1 error under either law as the total mass of its misclassified labelled inputs. The errors are $1/4$ on the source law and $3/4$ on the target law, illustrating input-distribution sensitivity for this fixed classifier.

The vector geometry in the first construction is shown schematically below: the horizontal component is the similarity with the image embedding $e_1$. The exact coordinates above determine the rankings; no proof relies on the drawing.

```tikz
\begin{tikzpicture}[x=2.3cm,y=2.3cm,>=stealth]
  \draw[->] (-0.08,0) -- (1.18,0) node[right] {$e_1$};
  \draw[->] (0,-0.08) -- (0,1.16) node[above] {$e_2$};
  \draw[->,thick] (0,0) -- (1,0) node[below right] {$u=v_{A1}$};
  \draw[->,dashed] (0,0) -- (0,1) node[left] {$v_{A2}$};
  \draw[->,thick] (0,0) -- (0.707,0.707) node[above left] {$q_A$};
  \draw[->,thick] (0,0) -- (0.8,0.6) node[above right] {$q_B$};
\end{tikzpicture}
```

As separate empirical context, Radford et al. trained CLIP on 400 million WebImageText image/text pairs. Unless otherwise specified, their reported “CLIP” results use ViT-L/14@336px, trained for 32 epochs with one additional high-resolution epoch. On their 27-dataset suite, zero-shot CLIP outperformed a regularized logistic-regression classifier on ResNet-50 features on 16 datasets. Their default “A photo of a {label}” prompt improved ImageNet accuracy by 1.3%, and ensembling 80 prompts added a further 3.5 percentage points over that default. These are measured outcomes under the paper's data, models, training, evaluation suite, and prompt choices.

In §3.3, the authors report that zero-shot CLIP improved effective robustness relative to ImageNet models across seven natural distribution shifts, reducing the robustness gap by up to 75%. Their dataset-specific class prompts increased average effective robustness by 5%, with gains concentrated on a few datasets. They caution that these results do not isolate the cause of the robustness gap and that pretraining and evaluation distributions may share spurious correlations.

In §5, the authors report median detected overlap of 2.2% and mean overlap of 3.2% across 35 evaluation datasets; only seven datasets had an overall accuracy change above 0.1%, and the largest detected increase was 0.6% on Birdsnap. They also state that detector recall could not be checked across all 400 million training pairs and that the Overlap and Clean subsets could differ in distribution or difficulty. Section 6 notes that the benchmark suite was partly co-adapted through repeated validation-set queries and reports weak results on fine-grained, systematic, novel, and truly out-of-distribution tasks. These results and limitations supply no general guarantee of transfer, out-of-distribution accuracy, reasoning, fairness, or semantic alignment.

## Example references

[Radford et al., §§2.5 and 3.1.2–3.1.5: training data/model scope, zero-shot results, and prompt measurements](https://arxiv.org/pdf/2103.00020)

[Radford et al., §3.3 “Robustness to Natural Distribution Shift,” §5 “Data Overlap Analysis,” and §6 “Limitations”](https://arxiv.org/pdf/2103.00020)

[Machine Learning II lecture notes, zero-shot transfer, prompt engineering/ensembling, measured evaluation, overlap, and limitations](https://csci4052u.science.ontariotechu.ca/generative_models/2021_clip/notes.html)

## Facts & Assumptions

**Given:** The two finite embedding setups, the class descriptions with their stated meanings, the source/target evaluation laws, a positive scale $s$, and the specified individual-text retrieval and finite 0–1 error rules. Verify the prompt-dependent classifier outputs, the retrieval/classification difference, the semantic-pair similarity contrast, and both finite error values.

[F1] [[alg-zero-shot-prompt-classification]]: For each class, normalize each prompt embedding, average and renormalize those vectors to form a prototype, score it by the scaled inner product with the normalized image embedding, and return the least-index class maximizing the score.

[A1] In the first setup, $u=e_1$, $v_{A1}=e_1$, $v_{A2}=e_2$, and $v_{B1}=v_{B2}=(4/5,3/5)$. Under the alternate wording, $v_{A1}=v_{A2}=e_1$ and the $B$ vectors remain unchanged. Retrieval ranks the four individual prompt embeddings by inner product with $u$.

[A2] In the second setup, $x_0\ne x_1$, $q_A=e_1$, $q_B=e_2$, $u(x_0)=u(x_1)=e_1$, and the fixed labels are $y(x_0)=A$, $y(x_1)=B$. The source law places masses $3/4,1/4$ on $(x_0,A),(x_1,B)$, and the target law places masses $1/4,3/4$ on those same labeled inputs. Error is the total mass assigned to misclassified inputs.

[A3] The class-specific descriptions $d_A,d_B$ are true only of classes $A,B$, respectively, among these two classes, and their normalized text embeddings are $q_A=e_1$ and $q_B=e_2$.

## Verification

**Given:** The two finite embedding setups, the class descriptions with their stated meanings, the source/target evaluation laws, a positive scale $s$, and the specified individual-text retrieval and finite 0–1 error rules. Verify the prompt-dependent classifier outputs, the retrieval/classification difference, the semantic-pair similarity contrast, and both finite error values.

1.1 Under the first wording, the normalized mean of $e_1$ and $e_2$ is $q_A=(1/\sqrt2,1/\sqrt2)$, while the two $B$ prompts average to $q_B=(4/5,3/5)$. [given, F1, A1, algebra]

1.2 Under the alternate wording, the $A$ prototype is $e_1$ and the $B$ prototype remains $(4/5,3/5)$, giving scores $s$ and $4s/5$. Thus the same image is classified as $A$ after the prompt change. [given, F1, A1, algebra]

1.3 In the second setup both image embeddings equal $e_1$, so their scores against $(q_A,q_B)=(e_1,e_2)$ are $(s,0)$ and the classifier predicts $A$ on both images. It is correct on $x_0$ and incorrect on $x_1$. [given, F1, A2, algebra]

2.1 Their scores are $z_A=s/\sqrt2$ and $z_B=4s/5$. Since both sides are positive and $(4/5)^2=16/25>1/2=(1/\sqrt2)^2$, $z_B>z_A$, so the class-prototype classifier returns $B$. [given, F1, A1, step 1.1, algebra]

2.2 Since $x_0\ne x_1$, the source law gives input mass $3/4$ to $x_0$ and the target law gives it $1/4$, with the reverse masses at $x_1$; the label assigned to each image is fixed. The only error atom has source mass $1/4$ and target mass $3/4$. Therefore the source and target errors are $1/4$ and $3/4$, respectively, with difference $1/2$. [given, A2, step 1.3, algebra]

3.1 The individual retrieval dot products are $1,0,4/5,4/5$. Since $1>4/5$, retrieval returns the first $A$ prompt, unlike the class-prototype classifier. [given, A1, step 2.1, algebra]

4.1 By [A2] and [A3], $x_1$ is a $B$ image and $d_A$ is false of $B$, so $(x_1,d_A)$ is semantically mismatched. The stated inner-product formula $\langle(a,b),(c,d)\rangle=ac+bd$ gives similarity $1$ for $(x_1,d_A)$ and $0$ for the matched pair $(x_1,d_B)$. [given, A2, A3, algebra] ∎
